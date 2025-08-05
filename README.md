

# Gerador de Currículos em HTML a partir de JSON

Este projeto oferece uma ferramenta simples e eficiente para gerar currículos formatados em HTML, prontos para impressão ou para serem salvos como PDF, a partir de uma estrutura de dados JSON. O sistema é otimizado para compatibilidade com ATS (Applicant Tracking Systems) e permite fácil personalização visual.

## Funcionalidades

- **Input de JSON:** Interface intuitiva para colar a estrutura JSON do seu currículo.
- **Geração Dinâmica de HTML:** Transforma o JSON em um currículo HTML bem estruturado e visualmente limpo.
- **Otimização para ATS:** A estrutura do currículo gerado segue as melhores práticas para ser facilmente lida e processada por sistemas de rastreamento de candidatos.
- **Estilo Minimalista:** Design em preto e branco com espaçamento compacto para máxima legibilidade e profissionalismo.
- **Links Visíveis:** Todos os links (email, LinkedIn, GitHub, etc.) são formatados em azul para fácil identificação.
- **Impressão e PDF:** Funcionalidade para imprimir o currículo diretamente do navegador ou salvá-lo como PDF, com o nome do candidato no título do arquivo.
- **Cópia de HTML:** Opção para copiar o HTML gerado para uso em outras plataformas.
- **Títulos de Seção Visíveis na Impressão:** Os títulos de cada categoria do currículo (Objetivo, Experiência, Habilidades, etc.) são exibidos tanto na prévia quanto na impressão.

![alt text](example.png "Title")

## Como Usar

Para utilizar o gerador de currículos, siga os passos abaixo:

1. **Clone ou Baixe o Projeto:** Obtenha os arquivos `index.html`, `style.css` e `script.js`.
2. **Abra o index.html:** No seu navegador de preferência (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.), abra o arquivo `index.html`.
3. **Insira o JSON:** No campo de texto fornecido, cole a estrutura JSON do seu currículo. Certifique-se de que o JSON esteja válido.
4. **Gerar Currículo:** Clique no botão "Gerar Currículo". A prévia do seu currículo será exibida imediatamente abaixo.
5. **Imprimir / Salvar como PDF:** Para imprimir o currículo ou salvá-lo como PDF, clique no botão "Imprimir / Salvar como PDF". A caixa de diálogo de impressão do seu navegador será aberta, permitindo que você escolha as opções desejadas.
6. **Copiar Texto do Currículo:** Se precisar do texto do currículo gerado, clique em "Copiar Texto do Currículo". Uma mensagem de confirmação aparecerá.
7. **Limpar:** Para remover o JSON do campo de texto e a prévia do currículo, clique no botão "Limpar".

## Estrutura do JSON

A seguir, a estrutura JSON esperada pelo sistema para a correta geração do currículo. É fundamental que os campos e a hierarquia sejam respeitados para que o currículo seja renderizado corretamente. Você pode pedir para uma ferramenta LLM gerar o currículo com as informações desejadas.

```
{
    "nome": "Fulano da Silva",
    "titulo": "Desenvolvedor de Software Júnior | Backend | Python",
    "contato": {
        "localizacao": "Bairro Teste - Cidade Fictícia/UF",
        "whatsapp": "(99) 91234-5678",
        "email": "fulano.silva.dev@email.com",
        "linkedin": "https://www.linkedin.com/in/fulano-silva-ficticio/",
        "github": "https://github.com/fulanosilva"
    },
    "objetivo": "Busco uma oportunidade desafiadora como Desenvolvedor(a) Júnior, onde possa aplicar meus conhecimentos em desenvolvimento de software e crescer profissionalmente. Tenho grande interesse em tecnologias de backend, como Python e Django, e desejo colaborar em projetos inovadores que impactem positivamente a sociedade.",
    "experiencia": [
        {
            "empresa": "TechCorp Inovação",
            "cargo": "Estagiário de Desenvolvimento",
            "periodo": "Jan/2024 - Dez/2024",
            "descricao": "Atuação no desenvolvimento e manutenção de módulos de sistema usando Python e Django. Colaboração em equipes ágeis, contribuindo para a criação de APIs RESTful e integração com bancos de dados."
        },
        {
            "empresa": "Soluções Digitais Ltda.",
            "cargo": "Assistente de Suporte Técnico",
            "periodo": "Jul/2023 - Dez/2023",
            "descricao": "Suporte técnico a usuários de software, resolução de problemas e documentação de procedimentos. Experiência em identificação e registro de bugs, além de comunicação eficaz com equipes de desenvolvimento."
        }
    ],
    "educacao": [
        {
            "instituicao": "Universidade da Programação",
            "curso": "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            "periodo": "Jan/2022 - Dez/2024"
        },
        {
            "instituicao": "Escola Técnica de Tecnologia",
            "curso": "Curso Técnico em Informática",
            "periodo": "Jan/2020 - Dez/2021"
        }
    ],
    "habilidades_tecnicas": {
        "linguagens": [
            "Python",
            "JavaScript",
            "SQL",
            "HTML",
            "CSS"
        ],
        "frameworks_bibliotecas": [
            "Django",
            "Flask",
            "Node.js",
            "React (Básico)",
            "Jinja"
        ],
        "bancos_de_dados": [
            "PostgreSQL",
            "MySQL",
            "MongoDB"
        ],
        "ferramentas_e_outros": [
            "Git",
            "Docker (Básico)",
            "VS Code",
            "Jira",
            "Metodologias Ágeis (Scrum)"
        ]
    },
    "idiomas": {
        "portugues": "Nativo",
        "ingles": "Intermediário"
    },
    "cursos_relevantes": [
        "Alura - Formação Python e Django para Web",
        "Rocketseat - Trilha Ignite Node.js",
        "Udemy - Fundamentos de Bancos de Dados Relacionais"
    ]
}
```
