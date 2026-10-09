import donQuijote from "../../assets/images/don-quijote.webp";
import orgulloPrejuicio from "../../assets/images/orgullo-prejuicio.webp";
import cienAnosSoledad from "../../assets/images/cien-anos-soledad.webp";
import milNovecientosOchentaYCuatro from "../../assets/images/1984.webp";
import crimenCastigo from "../../assets/images/crimen-castigo.webp";
import condeMontecristo from "../../assets/images/conde-montecristo.webp";
import odisea from "../../assets/images/odisea.webp";
import frankenstein from "../../assets/images/frankenstein.webp";
import granGatsby from "../../assets/images/gran-gatsby.webp";
import metamorfosis from "../../assets/images/metamorfosis.webp";
import miserables from "../../assets/images/miserables.webp";
import cumbresBorrascosas from "../../assets/images/cumbres-borrascosas.webp";
import mobyDick from "../../assets/images/moby-dick.webp";
import extranjero from "../../assets/images/extranjero.webp";
import hamlet from "../../assets/images/hamlet.webp";
import dorianGray from "../../assets/images/dorian-gray.webp";
import madameBovary from "../../assets/images/madame-bovary.webp";
import principito from "../../assets/images/principito.webp";
import divinaComedia from "../../assets/images/divina-comedia.webp";
import habitacionPropia from "../../assets/images/habitacion-propia.webp";

export interface Book {
	id: number;
	title: string;
	author: string;
	price: number;
	cover: string;
}

export const books: Book[] = [
	{
		id: 1,
		title: "Don Quijote de la Mancha",
		author: "Miguel de Cervantes",
		price: 11.95,
		cover: donQuijote,
	},
	{
		id: 2,
		title: "Orgullo y prejuicio",
		author: "Jane Austen",
		price: 12.99,
		cover: orgulloPrejuicio,
	},
	{
		id: 3,
		title: "Cien años de soledad",
		author: "Gabriel García Márquez",
		price: 12.3,
		cover: cienAnosSoledad,
	},
	{
		id: 4,
		title: "1984",
		author: "George Orwell",
		price: 10.4,
		cover: milNovecientosOchentaYCuatro,
	},
	{
		id: 5,
		title: "Crimen y castigo",
		author: "Fiódor Dostoievski",
		price: 12.3,
		cover: crimenCastigo,
	},
	{
		id: 6,
		title: "El conde de Montecristo",
		author: "Alexandre Dumas",
		price: 23.65,
		cover: condeMontecristo,
	},
	{
		id: 7,
		title: "La Odisea",
		author: "Homero",
		price: 12.25,
		cover: odisea,
	},
	{
		id: 8,
		title: "Frankenstein",
		author: "Mary Shelley",
		price: 12.3,
		cover: frankenstein,
	},
	{
		id: 9,
		title: "El gran Gatsby",
		author: "F. Scott Fitzgerald",
		price: 10.4,
		cover: granGatsby,
	},
	{
		id: 10,
		title: "La metamorfosis",
		author: "Franz Kafka",
		price: 11.87,
		cover: metamorfosis,
	},
	{
		id: 11,
		title: "Los miserables",
		author: "Victor Hugo",
		price: 16.1,
		cover: miserables,
	},
	{
		id: 12,
		title: "Cumbres borrascosas",
		author: "Emily Brontë",
		price: 14.15,
		cover: cumbresBorrascosas,
	},
	{
		id: 13,
		title: "Moby Dick",
		author: "Herman Melville",
		price: 12.3,
		cover: mobyDick,
	},
	{
		id: 14,
		title: "El extranjero",
		author: "Albert Camus",
		price: 12.3,
		cover: extranjero,
	},
	{
		id: 15,
		title: "Hamlet",
		author: "William Shakespeare",
		price: 12.3,
		cover: hamlet,
	},
	{
		id: 16,
		title: "El retrato de Dorian Gray",
		author: "Oscar Wilde",
		price: 10.4,
		cover: dorianGray,
	},
	{
		id: 17,
		title: "Madame Bovary",
		author: "Gustave Flaubert",
		price: 9.5,
		cover: madameBovary,
	},
	{
		id: 18,
		title: "El Principito",
		author: "Antoine de Saint-Exupéry",
		price: 12.3,
		cover: principito,
	},
	{
		id: 19,
		title: "Divina Comedia",
		author: "Dante Alighieri",
		price: 11.35,
		cover: divinaComedia,
	},
	{
		id: 20,
		title: "Una habitación propia",
		author: "Virginia Woolf",
		price: 10.4,
		cover: habitacionPropia,
	},
];
