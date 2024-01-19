const fs = require('fs');
const ejs = require('ejs');

const data = [
    {title: 'Elon Musk', author: 'Green Michel', image: 'elon.jpg'},
    {title: 'Bill Gates', author: 'Alex Fisher', image: 'elon.jpg'},
    {title: 'Michael Tal', author: 'Alex Fisher', image: 'elon.jpg'},
    {title: 'Rick and Morty', author: 'Alex Fisher', image: 'elon.jpg'},
];

const outputFolder = 'output';

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const templatePath = 'template.ejs';
const template = fs.readFileSync(templatePath, 'utf-8');

data.forEach((item, index) => {
    const renderedTemplate = ejs.render(template, item);

    const filename = item.title.toLowerCase().split(' ').join('-')
    const filePath = `${outputFolder}/${filename}.html`;

    fs.writeFileSync(filePath, renderedTemplate, 'utf-8');
    console.log(`Создан файл: ${filePath}`);
});

console.log('Генерация статичных сайтов завершена.');