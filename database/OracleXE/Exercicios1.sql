/*
	1) O que é Indexação?
    Indexação é uma ferramenta do banco que permite escolher uma coluna de uma tabela 
    e criar uma configuração onde ela pode ser organizada em ordem crescente(Padrão) ou decrescente,
    deixando buscas mais ágeis
    
    Vantagens: 
		Em tabelas grandes
    Desvantagens: 
		Se há inserções constantes na tabela, precisa ficar reordenando
        Se existem muitos valores repetidos, a indexação se torna ineficiente
*/

CREATE INDEX index_nome ON Clientes(Nome);
SELECT * FROM Clientes WHERE Nome = 'Gabriel';

/*
	2) Onde faz sentido usar Bancos de Dados Relacionais?
    Em Sistemas que precisam ser padronizados(Em Tabelas)
    Exemplos: Aplicações Web, E-Commerces, Blogs, Bancos, Jogos
    
    3) Onde faz sentido usar Bancos de Dados Não Relacionais?
    Em Sistemas que precisam ser dinâmicos e horizontais(Como o JSON)
    Exemplos: Redes Sociais, Sistema de Recomendação, Filas de Mensagens
    
    4) Onde faz sentido usar Bancos de Dados em Nuvem?
    Em Sistemas que escalam em alta velocidade e precisam de disponibilidade
    o tempo todo, se destaca por ser mais fácil de usar, já que é a capacidade 
    é ajustada automaticamente com um grande aumento de dados
    Exemplos: Jogos Online, Startup SaaS, Netflix
*/