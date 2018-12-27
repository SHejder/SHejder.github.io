export let getData = {
    name: function () {
        let arr = ['Иван', 'Стенпан', 'Сергей'];
        return arr[getData.randomInt(arr.length - 1)]

    },

    email: function () {
        let arr = ['test@test.ru', 'darvin@yandex.ru', 'darvin@gmail.com', 'darvin@bk.ru'];

        return arr[getData.randomInt(arr.length - 1)]
    },

    randomInt: function (max) {
        let min = 0;
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    phone: function () {
        let arr = [89009009090, '+78954566235', 89201002020];

        return arr[getData.randomInt(arr.length - 1)]
    }
};
