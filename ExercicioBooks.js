class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    
    constructor() {
        this.books = [];
    }

    addBook(book) {
        book.id = (this.books.length + 1).toString();
        this.books.push(book);
        return book;
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        const book = this.getBookById(id);
        this.books.splice(book, 1);
    }

    getBookById(id) {
        const book = this.books.find((obj) => obj.id === id);

        if(book === undefined) {
            return 'Esse livro não existe.';
        }

        return book;
    }

    updateBookById(id, book) {
        
        const book_origin = this.getBookById(id);
        
        if(book_origin !== undefined) {
            
            if(book.title !== undefined) {
                book_origin.title = book.title;
            }

            if(book.description !== undefined) {
                book_origin.description = book.description;
            }

            if(book.author !== undefined) {
                book_origin.author = book.author;
            }

        } else {
            console.log('Esse livro não existe.');
        }

        return book_origin;

    }

}

const library = new Library();

//adicionar livros
const senhor_dos_aneis_1 = new Book('O senhor dos anéis - a sociedade do anel','O "Um Anel" é o elemento central da saga. No anel, em inscrições no alfabeto Tengwar com versos na língua proibida de Mordor, pode-se ler: "Um Anel que a todos rege, Um Anel para achá-los, Um Anel que a todos traz, para na escuridão atá-los". Palavras em contínuo tanto na parte de dentro do anel, como na parte externa do anel. Isso se apresenta no início do livro, na apresentação da trilogia, no original em primeira edição em Inglês. Na saga, os vilões se autodestroem pelo próprio porte do anel.','R.R.Tolkien');
console.log("Livro adicionado com sucesso: \n");
console.log(library.addBook(senhor_dos_aneis_1));

const capitaes_de_ar = new Book('Mulheres de Areia','As reviravoltas nos caminhos das gêmeas Ruth e Raquel, de perfis distintos, fazem nascer a rivalidade em suas vidas. Tudo começa quando Raquel se casa com o namorado da irmã por interesse até que, após um acidente, é dada como morta.','Wolf Maya');
console.log("Livro adicionado com sucesso: \n");
console.log(library.addBook(capitaes_de_ar));

const hora_da_estrela = new Book('A Hora da Estrela','A Hora da Estrela é um romance literário da escritora brasileira Clarice Lispector. O romance narra a história da datilógrafa alagoana, Macabéa, que migra para o Rio de Janeiro, tendo sua rotina narrada por um escritor fictício chamado Rodrigo S.M.','Clarice Lispector');
console.log("Livro adicionado com sucesso: \n");
console.log(library.addBook(hora_da_estrela));

//listar todos
console.log("Listagem completa dos livros: ");

console.log(library.getBooks());

//remover livro
library.removeBookById('1');

console.log("Resultado após remoção de 1 livro com id '1'");

console.log(library.getBooks());

//localizar livro pelo 'id'
console.log("Localizando livro pelo id '1'");

console.log(library.getBookById('1'));

//localizar livro pelo 'id'
console.log("Localizando livro pelo id '2'");

console.log(library.getBookById('2'));

//editar um livro

//1 editando título
const bookUpTitle = new Book('Capitães de Areia');

console.log("Resultado após atualização de título do livro.");

console.log(library.updateBookById('2', bookUpTitle));

//2 editando descrição
const bookUpDesc = new Book(undefined, 'Capitães da Areia é um romance de autoria do escritor brasileiro Jorge Amado, escrito em 1937. A obra retrata a vida de um grupo de menores abandonados, que crescem nas ruas da cidade de Salvador, Bahia, vivendo em um trapiche, roubando para sobreviver, chamados de "Capitães da Areia".');

console.log("Resultado após atualização da descrição do livro.");

console.log(library.updateBookById('2', bookUpDesc));


//3 editando autor
const bookUpAuthor = new Book(undefined, undefined, 'Jorge Amado');

console.log("Resultado após atualização do autor.");

console.log(library.updateBookById('2', bookUpAuthor));

//Exibir lista completa

console.log("Exibição da lista completa.");

console.log(library.getBooks());

console.log("Fim dos testes.");