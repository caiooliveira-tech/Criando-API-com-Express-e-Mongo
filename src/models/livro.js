import mongoose from "mongoose";
import {autorSchema} from "./autor.js";

// Abaixo está sendo criado um schema para o livro, que será utilizado para criar um modelo de livro.
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
},{versionKey: false});

// Abaixo está sendo criado um modelo de livro, que será utilizado para realizar operações no banco de dados. Os parâmetros são o nome da coleção e o schema.
const livros = mongoose.model('livros', livroSchema);

export default livros;