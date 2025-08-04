document.addEventListener("DOMContentLoaded", () => {
  const jsonInput = document.getElementById("jsonInput");
  const generateCvButton = document.getElementById("generateCv");
  const clearInputButton = document.getElementById("clearInput");
  const printCvButton = document.getElementById("printCv");
  const copyHtmlButton = document.getElementById("copyHtml");
  const cvOutput = document.getElementById("cvOutput");

  generateCvButton.addEventListener("click", generateResume);
  clearInputButton.addEventListener("click", clearInput);
  printCvButton.addEventListener("click", printResume);
  copyHtmlButton.addEventListener("click", copyResumeHtml);

  function generateResume() {
    const jsonText = jsonInput.value;
    if (!jsonText) {
      cvOutput.innerHTML =
        '<p class="placeholder">Por favor, insira um JSON para gerar o currículo.</p>';
      return;
    }

    try {
      const resumeData = JSON.parse(jsonText);
      cvOutput.innerHTML = createResumeHtml(resumeData);
    } catch (e) {
      cvOutput.innerHTML = `<p class="placeholder" style="color: red;">Erro ao analisar JSON: ${e.message}. Verifique a sintaxe.</p>`;
    }
  }


  function createResumeHtml(data) {
    let html = "";
    let personalInfoHtml = "";
    let printTitle = "";

    // Informações Pessoais (nome, titulo, contato)
    if (data.nome) {
      //printTitle = `<h1 class="print-title">${data.nome}</h1>`;
      const contactItems = [];
      if (data.contato.whatsapp)
        contactItems.push(
          `<a href="https://wa.me/${data.contato.whatsapp.replace(
            /\D/g,
            ""
          )}" target="_blank"><i class="fa-brands fa-whatsapp"></i> ${data.contato.whatsapp}</a>`
        );
      if (data.contato.email)
        contactItems.push(
          `<a href="mailto:${data.contato.email}"><i class="fa-solid fa-envelope"></i> ${data.contato.email}</a>`
        );
      if (data.contato.linkedin)
        contactItems.push(
          `<a href="${data.contato.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>`
        );
      if (data.contato.github)
        contactItems.push(
          `<a href="${data.contato.github}" target="_blank"><i class="fa-brands fa-github"></i> Portfolio/Github</a>`
        );
      if (data.contato.localizacao) contactItems.push(`<i class="fa-solid fa-location-dot"></i>`+ data.contato.localizacao);

      const contactInfo = contactItems.filter(Boolean).join(" | ");

      personalInfoHtml = `
              <section class="personal-info">
                  <h1 class="print-title">${data.nome}</h1>
                  <p>${data.titulo}</p>
                  <div class="contact-info">
                      <p>${contactInfo}</p>
                  </div>
              </section>
          `;
    }

    html += printTitle + personalInfoHtml;

    // Objetivo
    if (data.objetivo) {
      html += `
              <section>
                  <h2>Objetivo</h2>
                  <p>${data.objetivo}</p>
              </section>
          `;
    }

    // Experiência Profissional
    if (data.experiencia && data.experiencia.length > 0) {
      html += `
              <section>
                  <h2>Experiência Profissional</h2>
                  ${data.experiencia
          .map(
            (exp) => `
                      <div class="experience-item">
                          <h3>${exp.cargo}</h3>
                          <p><strong>${exp.empresa}</strong> | ${exp.periodo
              }</p>
                          ${exp.descricao ? `<p>${exp.descricao}</p>` : ""}
                      </div>
                  `
          )
          .join("")}
              </section>
          `;
    }

    // Projetos Pessoais
    if (data.projetos_pessoais && data.projetos_pessoais.length > 0) {
      html += `
              <section>
                  <h2>Projetos Pessoais</h2>
                  ${data.projetos_pessoais
          .map(
            (proj) => `
                      <div class="project-item">
                          <h3>${proj.nome}</h3>
                          <p>
                              ${proj.link_github
                ? `<a href="${proj.link_github}" target="_blank">GitHub</a>`
                : ""
              }
                              ${proj.link_github && proj.link_deploy
                ? " | "
                : ""
              }
                              ${proj.link_deploy
                ? `<a href="${proj.link_deploy}" target="_blank">Deploy</a>`
                : ""
              }
                          </p>
                          ${proj.tecnologias && proj.tecnologias.length > 0
                ? `
                              <p><strong>Tecnologias:</strong> ${proj.tecnologias.join(
                  ", "
                )}</p>
                              `
                : ""
              }
                          ${proj.descricao ? `<p>${proj.descricao}</p>` : ""}
                      </div>
                  `
          )
          .join("")}
              </section>
          `;
    }

    // Educação
    if (data.educacao && data.educacao.length > 0) {
      html += `
              <section>
                  <h2>Educação</h2>
                  ${data.educacao
          .map(
            (edu) => `
                      <div class="education-item">
                          <h3>${edu.curso}</h3>
                          <p><strong>${edu.instituicao}</strong> | ${edu.periodo}</p>
                      </div>
                  `
          )
          .join("")}
              </section>
          `;
    }

    // Habilidades Técnicas e Idiomas
    if (data.habilidades_tecnicas) {
      html += `
              <section>
                  <h2>Habilidades Técnicas e Idiomas</h2>
                  <div class="skills-list">
                      <ul>
                          ${Object.entries(data.habilidades_tecnicas)
          .map(([categoria, habilidades]) => {
            const nomeCategoria = categoria
              .replace(/_/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase());

            // Mapeia cada habilidade para um <span> e depois junta
            const habilidadesHtml = habilidades.map(habilidade => `<span>${habilidade}</span>`).join("●");

            return `
                                  <li><strong>${nomeCategoria}: </strong> ${habilidadesHtml}</li>
                              `;
          })
          .join("")}`;
    
    // Idiomas
    if (data.idiomas) {
      html += `
                <li><strong>Idiomas: </strong>
                    ${Object.entries(data.idiomas)
        .map(
          ([lang, level]) =>
            `<span>${lang.charAt(0).toUpperCase() + lang.slice(1)
            } (${level})</span>`
        )
        .join("●")}
                </li>
          `;
    }
    
    html += `       </ul>
                  </div>
              </section>
          `;
    }

    

    // Cursos Relevantes
    if (data.cursos_relevantes && data.cursos_relevantes.length > 0) {
      html += `
              <section>
                  <h2>Cursos Relevantes</h2>
                  <ul>
                      ${data.cursos_relevantes
          .map((curso) => `<li>${curso}</li>`)
          .join("")}
                  </ul>
              </section>
          `;
    }

    // Carta de Apresentação (NOVO)
    if (data.carta_apresentacao) {
      html += `
              <section class="cover-letter-section">
                  <h2>Carta de Apresentação</h2>
                  <p>${data.carta_apresentacao}</p>
              </section>
          `;
    }

    if (html === "") {
      return '<p class="placeholder">Nenhum dado válido encontrado no JSON para gerar o currículo.</p>';
    }

    return html;
  }
  function clearInput() {
    jsonInput.value = "";
    cvOutput.innerHTML =
      '<p class="placeholder">Cole o JSON e clique em "Gerar Currículo" para visualizar.</p>';
  }

  function printResume() {
    const printTitleElement = document.querySelector(".print-title");
    if (printTitleElement) {
      document.title = `Currículo - ${printTitleElement.textContent.trim()}`;
    } else {
      document.title = "Currículo Gerado";
    }
    window.print();
    setTimeout(() => {
      document.title = "Gerador de Currículos JSON";
    }, 100);
  }

  function copyResumeHtml() {
    // Pega o elemento que contém a saída do currículo
    const cvOutput = document.getElementById("cvOutput");
    
    // Cria um elemento temporário para conter o título para impressão
    // e o conteúdo do currículo para extrair o texto.
    const tempDiv = document.createElement("div");

    // Adiciona o título e o conteúdo do currículo ao elemento temporário
    // Isso garante que o nome do currículo seja incluído no texto.
    const printTitleElement = document.querySelector(".print-title");
    if (printTitleElement) {
      tempDiv.appendChild(printTitleElement.cloneNode(true));
    }
    tempDiv.appendChild(cvOutput.cloneNode(true));

    // Verifica se há conteúdo de currículo para copiar (além do placeholder)
    if (cvOutput.innerHTML && !cvOutput.innerHTML.includes("placeholder")) {
      const textToCopy = tempDiv.textContent.trim();

      // Cria uma área de texto temporária para a cópia
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
      
      // Adiciona a área de texto ao corpo do documento e seleciona o conteúdo
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      
      // Executa o comando de cópia
      document.execCommand("copy");
      
      // Remove a área de texto temporária
      document.body.removeChild(tempTextArea);
      
      alert("Conteúdo de texto do currículo copiado para a área de transferência!");
    } else {
      alert("Não há currículo para copiar. Gere um currículo primeiro.");
    }
  }
});
