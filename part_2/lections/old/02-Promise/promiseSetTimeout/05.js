/* алгоритм:
1) Теперь при каждом отжимании или приседании в консоль будет выводится, сколько уже выполнено
2) Если задано больше повторений, чем возможно сделать, будет сделано максимум возможных повторений.
3) Если максимум отжиманий достигнут, приседания будут выполняться все равно.
*/

// Время на одно повторение отжимания / приседания
const pushUpTime = 1000;
const squatTime = 700;

// Максимум отжиманий и приседаний соответственно
const maxPossiblePushUps = 5;
const maxPossibleSquats = 20;

 // Количество отжиманий и приседаний, которое надо выполнить
let pushNum = 15;
let squadsNum = 10;

function pushUps(count) {
    return new Promise( (resolve, reject) => {
        let completed = 0;
        console.log('Приступаю к отжиманиям');

        setTimeout(function work() {
            completed++;
            console.log('Отжиманий выполнено: ' + completed);
            if (completed >= maxPossiblePushUps) reject(new Error('too many push ups, tired...'));

            if (completed < count && completed < maxPossiblePushUps) {
                setTimeout(work, pushUpTime);
            } else {
                resolve('Отжимания выполнены');
            }
        }, pushUpTime);
    });
}

function squats(count) {
    return new Promise( (resolve, reject) => {
        let completed = 0;
        console.log('Приступаю к приседаниям');

        setTimeout(function work() {
            completed++;
            console.log('Приседаний выполнено: ' + completed);

            if (completed >= maxPossibleSquats) reject(new Error('too many squats, tired...'));

            if (completed < count && completed < maxPossibleSquats) {
                setTimeout(work, squatTime);
            } else {
                resolve('Приседания выполнены');
            }
        }, squatTime);
    });
}


pushUps(pushNum)
    .catch(err => {
        return Promise.resolve(err.message);
    })
    .then((result) => {
        console.log(result);
        return squats(squadsNum);
    })
    .catch(err => console.log(err.message))
    .finally(() => console.log('Упражнения завершены'));