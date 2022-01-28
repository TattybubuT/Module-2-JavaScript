// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
let weightSouvenir = 75;
let weightTrinket =112;
let numberOfSouvenirs = +prompt('Введите количество сувениров: ');
let numberOfTrinkets = +prompt('Введите количество безделушек: ');
let totalWeight = (weightSouvenir*numberOfSouvenirs)+(weightTrinket*numberOfTrinkets);
console.log(`Ваша посылка весит ${totalWeight/1000}кг!`);