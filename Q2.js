const students = require("./Data");

function getUniqueLanguages(data) {
    const languageSet = new Set();
    data.forEach(student => {
        student.Pro_languages.forEach(lang => languageSet.add(lang)); 
    });
    return Array.from(languageSet);
}


console.log(getUniqueLanguages(students));
