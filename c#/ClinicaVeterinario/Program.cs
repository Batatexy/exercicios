// Program.cs
using System;
using System.Collections.Generic;

namespace ClinicaVeterinaria 
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Cachorro cachorro = new Cachorro("Rex", "SRD", "Curto");
            Gato gato = new Gato("Nala", "SRD");

            Veterinario veterinario = new Veterinario("Dr. Veterinario", "777");

            Clinica clinica = new Clinica();
            clinica.AdicionarAnimal(cachorro);
            clinica.AdicionarAnimal(gato);

            List<Animal> animaisDaClinica = clinica.Animais;
            veterinario.Examinar(animaisDaClinica);
        }
    }
}