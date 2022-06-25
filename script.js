/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального 
поиска и замены. */

let str1 = 'aaa@bbb@ccc';
console.log( str1.replace(/@/g, "!") );


/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
дату в формат 31/12/2025. */

let date = "2025-12-31";

console.log( date.replace(/(2025)-(12)-(31)/, "$3/$2/$1") );

/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice). */

let str3 = "Я учу javascript!";
console.log(str3.substring(2));
console.log(str3.substr(2, 16));
console.log(str3.slice(2, 16));

/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */


const getResult = function (arr) {
    let result = 0;
    for(let i= 0; i< arr.length; i++){
        result += Math.pow(arr[i], 3)
    }
    return Math.sqrt(result);
}
console.log( getResult([4, 2, 5, 19, 13, 0, 10]) );

/* 5. Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1. */

const getSum =function(a, b){
    let c = a -b;
    return (c > 0)? c: Math.abs(c);
}
console.log( getSum(3, 5) );
console.log( getSum(6, 1) );


/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014). */

const printDateNow = function(){
    let dateNow = new Date();
    let getDate = dateNow.getDate();
    let getMonth = (dateNow.getMonth()+ 1);

    if(getDate < 10) getDate = "0" + getDate;
    if(getMonth < 10) getMonth = "0" + getMonth;

    return dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()+ " " + getDate + "." + getMonth + "." + dateNow.getFullYear();
}
console.log( printDateNow() );


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'.
*/

let str7 = "aa aba abba abbba abca abea";
console.log( str7.match(/ab+a/gi) );

/* 8. Напишите ф-цию строгой проверки ввода номер телефона в 
международном формате (<код страны> <код города или сети> <номер 
телефона>). Функция должна возвращать true или false. Используйте 
регулярные выражения.*/

const checkPhoneNumber = function(number){
    let regexp = /\+?375\(?\)?\s?\-?[1-9]{2}\s?\-?[0-9]{7,9}/g;
    console.log( regexp.test(number) );
}
checkPhoneNumber("375295615911");


/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов. 
Курс «JS».
Функция должна возвращать true или false. Используйте регулярные 
выражения.*/

const checkEmail = function(email){
    let regExp = /^[0-9a-z][0-9a-z-._]+@{1}[0-9a-z][0-9a-z-]+\.[a-z]{2,11}/g;
    console.log( regExp.test(email) );
}
checkEmail("alesia@gmail.com");

/* 10. Напишите ф-цию, которая из полного адреса с параметрами и без, 
например: https://tech.onliner.by/2018/04/26/smart-do-200/? 
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес 
доменного имени (https://tech.onliner.by), остальную часть адреса без 
параметров (/2018/04/26/smart-do-200/), параметры 
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе 
может и не быть каких-либо составляющих. Ф-ция должна возвращать 
массив. */

const getDomenName= function(url){
    let regExp = /^https:\/\/([a-z0-9.]+)(\/[^?&#\s]+\/?)?(\?[^?#\s]+)?(#[a-z0-9]+)?/;
    let matches = url.match(regExp);
    return matches;

}
console.log( getDomenName("https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3") );