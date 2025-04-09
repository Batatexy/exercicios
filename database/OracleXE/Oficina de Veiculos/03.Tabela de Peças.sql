/*Adicionar uma tabela de peças com o id da peça, descriçao, lote, serial, valor 
essa tabela vai ter esta relacionada a manutenção. Ao realizar a manutenção adicionar as peças utilizadas
e status da manutenção.*/

CREATE TABLE Pecas (
	id_peca INTEGER NOT NULL PRIMARY KEY,
	descricao VARCHAR2(255),
    lote NUMBER,
    serial NUMBER,
    quantidade NUMBER
    
);

INSERT INTO Pecas VALUES (1, 'Pastilha de freio', 101, 7375, 50);
INSERT INTO Pecas VALUES (2, 'Filtro de óleo', 106, 83687, 30);
INSERT INTO Pecas VALUES (3, 'Correia dentada', 110, 57334, 20);
INSERT INTO Pecas VALUES (4, 'Amortecedor dianteiro', 65356, 10004, 15);
INSERT INTO Pecas VALUES (5, 'Bateria 60Ah', 118, 1646, 10);
INSERT INTO Pecas VALUES (6, 'Filtro de ar', 126, 8468, 25);
INSERT INTO Pecas VALUES (7, 'Velas de ignição', 9582, 10007, 40);
INSERT INTO Pecas VALUES (8, 'Disco de freio', 9365, 10008, 12);
INSERT INTO Pecas VALUES (9, 'Sensor de oxigênio', 1847, 10009, 8);
INSERT INTO Pecas VALUES (10, 'Radiador', 170, 468468, 5);

select * from Pecas;

/***************************************************************************************************************/
        
CREATE TABLE Manutencoes_Pecas (
    id_manutencao INTEGER NOT NULL,
	id_peca INTEGER NOT NULL,
	
    CONSTRAINT fk_manutencoes FOREIGN KEY (id_manutencao) REFERENCES Manutencoes(id_manutencao),
    CONSTRAINT fk_pecas FOREIGN KEY (id_peca) REFERENCES Pecas(id_peca)
);

BEGIN
    INSERT INTO Manutencoes_Pecas VALUES (1, 2);
    INSERT INTO Manutencoes_Pecas VALUES (1, 10);
    INSERT INTO Manutencoes_Pecas VALUES (2, 7);
    INSERT INTO Manutencoes_Pecas VALUES (2, 4);
    INSERT INTO Manutencoes_Pecas VALUES (2, 2);
    INSERT INTO Manutencoes_Pecas VALUES (3, 1);
    INSERT INTO Manutencoes_Pecas VALUES (3, 5);
    INSERT INTO Manutencoes_Pecas VALUES (3, 6);
    INSERT INTO Manutencoes_Pecas VALUES (3, 9);
COMMIT; /*Ter Certeza dos Dados antes de colocar este comando*/
END;

select * from Manutencoes_Pecas;
select v.modelo, p.descricao, m.custo from Veiculos v
join Manutencoes m on m.id_veiculo = v.id_veiculo
join Manutencoes_Pecas mp on mp.id_manutencao = m.id_manutencao
join Pecas p on p.id_peca = mp.id_peca;







