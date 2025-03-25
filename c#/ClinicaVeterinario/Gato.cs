// Gato.cs
using System;

namespace ClinicaVeterinaria 
{
    public class Gato : Animal 
    {
        public Gato(string Nome, string Raca) : base(Nome, Raca) { }

        public override void EmitirSom()
        {
            Console.WriteLine("O gato faz: Miau!");
        }
    }
}