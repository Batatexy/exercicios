/******************************************EXERCICIO*1******************************************/

BEGIN
    INSERT INTO Pecas VALUES (11, 'Filtro de combustível', 135, 23873, 18, 9);
    INSERT INTO Pecas VALUES (12, 'Rolamento da roda', 142, 77452, 25, 3);
    INSERT INTO Pecas VALUES (13, 'Coxim do motor', 157, 98374, 10, 1);
    INSERT INTO Pecas VALUES (14, 'Sensor de temperatura', 163, 55361, 8, 5);
    INSERT INTO Pecas VALUES (15, 'Interruptor de freio', 149, 76544, 12, 4);
    INSERT INTO Pecas VALUES (16, 'Bobina de ignição', 172, 33214, 20, 5);
    INSERT INTO Pecas VALUES (17, 'Termostato', 166, 92741, 15, 6);
    INSERT INTO Pecas VALUES (18, 'Vela aquecedora', 180, 28374, 14, 1);
    INSERT INTO Pecas VALUES (19, 'Sensor de rotação', 190, 84736, 9, 5);
    INSERT INTO Pecas VALUES (20, 'Bieleta da suspensão', 195, 73415, 11, 3);
    INSERT INTO Pecas VALUES (21, 'Eletroventilador', 202, 61274, 6, 6);
    INSERT INTO Pecas VALUES (22, 'Cabo de vela', 210, 32781, 17, 5);
    INSERT INTO Pecas VALUES (23, 'Sensor MAP', 218, 55512, 7, 5);
    INSERT INTO Pecas VALUES (24, 'Catalisador', 223, 77232, 5, 7);
    INSERT INTO Pecas VALUES (25, 'Módulo de injeção', 230, 88993, 4, 5);
COMMIT;
END;

select * from pecas;

/*1 - faça uma contagem de todas as peças  no estoque*/
SELECT count(p.id_peca) AS qnt_Peças /*Soma todos os números em na coluna Quantidade*/
FROM Pecas p;

SELECT SUM(p.quantidade) AS Total_Peças /*Soma todos os números em na coluna Quantidade*/
FROM Pecas p;

/*2 - faça uma contagem de peças para cada categoria,*/
SELECT c.id_categoria, c.descricao AS categoria, SUM(p.quantidade) AS Qnt_Peças FROM Pecas p
JOIN Categorias c ON c.id_categoria = p.id_categoria
GROUP BY c.id_categoria, c.descricao  /*Agrupa os valores de Categorias que aparecem várias vezes na tabela de Peças*/
ORDER BY Qnt_Peças; /*Ordem Crescente*/

/*3 - faça uma contagem do total de amortecedores ou uma outra peça específica;*/
select SUM(quantidade) AS Quantidade_Filtro_De_Ar from PECAS
where descricao = 'Filtro de ar';

/*4 - faça uma seleção de peças e ordene pelo campo descrição (pesquisar como ordenar de forma crescente e decrescente)*/
select descricao from pecas
order by descricao DESC;

/*Extra*/
select c.descricao as Categoria, p.descricao as Peça from Categorias c
left join Pecas p on p.id_categoria = c.id_categoria
order by p.descricao ASC NULLS FIRST;



