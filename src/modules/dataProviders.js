export let getData = {
    name: function () {
        let arr = ['Иван', 'Стенпан', 'Сергей', 'Ирина', 'Виктория', 'Светлана'];
        return arr[getData.randomInt(arr.length - 1)]

    },

    email: function () {
        let arr = ['test@darvin-studio.ru', 'darvin@yandex.ru', 'darvin@gmail.com', 'darvin@bk.ru'];

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
    },
    textarea: function () {
        let arr = ['This is the test!', 'Hi! It\'s a test!'];

        return arr[getData.randomInt(arr.length - 1)]
    },
    text: function () {
        let arr = ['This is the test!', 'Hi! It\'s a test!'];

        return arr[getData.randomInt(arr.length - 1)]
    },
    number:function () {
        return getData.randomInt(100)
    }
};
