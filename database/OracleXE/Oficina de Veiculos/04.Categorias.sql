CREATE TABLE Categorias_Pecas (
    id_categoria INTEGER NOT NULL PRIMARY KEY,
    descricao VARCHAR2(255)
);

/*As peças de um veículo podem ser classificadas em diversas categorias, dependendo da sua função e localização. 
Aqui está uma lista comum de categorias:*/

BEGIN
    INSERT INTO Categorias_Pecas VALUES (1, 'Motor e Sistema de Propulsão');
    /*Pistões, cilindros, bielas, turbinas, velas de ignição*/
    
    INSERT INTO Categorias_Pecas VALUES (2, 'Transmissão');
    /*Embreagem, caixa de câmbio, diferencial, semi-eixos, correia dentada*/
    
    INSERT INTO Categorias_Pecas VALUES (3, 'Suspensão e Direção');
    /*Amortecedores, molas, barra estabilizadora, braços de direção*/
    
    INSERT INTO Categorias_Pecas VALUES (4, 'Sistema de Freios');
    /*Pastilhas, discos, tambor, líquido de freio*/
    
    INSERT INTO Categorias_Pecas VALUES (5, 'Sistema Elétrico e Eletrônico');
    /*Alternador, bateria, chicotes elétricos, sensores, ECU (unidade de controle eletrônico)*/
    
    INSERT INTO Categorias_Pecas VALUES (6, 'Sistema de Refrigeração');
    /*Radiador, ventoinha, bomba d'água, termostato*/
    
    INSERT INTO Categorias_Pecas VALUES (7, 'Sistema de Escape');
    /*Catalisador, abafador, tubo de escape*/
    
    INSERT INTO Categorias_Pecas VALUES (8, 'Carroceria e Estrutura');
    /*Para-choques, capô, portas, para-lamas*/
    
    INSERT INTO Categorias_Pecas VALUES (9, 'Sistema de Combustível');
    /*Bomba de combustível, filtro de combustível, injetores*/
    
    INSERT INTO Categorias_Pecas VALUES (10, 'Itens de Segurança');
    /*Cintos de segurança, airbags, retrovisores, travas*/
    
    INSERT INTO Categorias_Pecas VALUES (11, 'Itens de Conforto');
    /*Bancos, ar-condicionado, painel multimídia*/
    
    
    INSERT INTO Categorias_Pecas VALUES (12, 'Sistema de lubrificação');
    /*Filtro de óleo*/
    
    INSERT INTO Categorias_Pecas VALUES (13, 'Sistema de admissão');
    /*Filtro de ar*/
    
COMMIT;
END;

select * from Categorias_Pecas;

/*Criar uma nova coluna para a FK das categorias*/
    ALTER TABLE Pecas
    ADD id_categoria INTEGER;
    
    ALTER TABLE Pecas
    ADD CONSTRAINT fk_Categorias FOREIGN KEY (id_categoria)
    REFERENCES Categorias_Pecas(id_categoria);
/************************************************/

select * from Pecas;

/*Atualizar os dados já existentes*/
BEGIN
    UPDATE Pecas SET id_categoria = 4 WHERE id_peca = 1;
    UPDATE Pecas SET id_categoria = 12 WHERE id_peca = 2;
    UPDATE Pecas SET id_categoria = 2 WHERE id_peca = 3;
    
    UPDATE Pecas SET id_categoria = 3 WHERE id_peca = 4;
    UPDATE Pecas SET id_categoria = 5 WHERE id_peca = 5;
    UPDATE Pecas SET id_categoria = 13 WHERE id_peca = 6;
    
    UPDATE Pecas SET id_categoria = 1 WHERE id_peca = 7;
    UPDATE Pecas SET id_categoria = 4 WHERE id_peca = 8;
    UPDATE Pecas SET id_categoria = 5 WHERE id_peca = 9;
    
    UPDATE Pecas SET id_categoria = 6 WHERE id_peca = 10;
COMMIT;
END;

select p.descricao, c.descricao from Pecas p
join Categorias_Pecas c on c.id_categoria = p.id_categoria;

