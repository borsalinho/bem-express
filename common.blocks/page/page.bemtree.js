block('page')({
    content: node => [
        {
            block: 'header-OC'
        },
        {
            // block: 'body-OC'
            // вот тут я переделал немного чтобы body сразу принял нужную страницу
            block: node.data.body
        },
        {
            block: node.data.footer
        }
    ]
});
