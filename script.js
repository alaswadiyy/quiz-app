async function getData(type, value) {
    const apiUrl = 
        type == "categories"
        ? "https://opentdb.com/api_category.php"
        : "https://opentdb.com/api.php?amount=10&category=${category}&difficult=${difficulty}";
}