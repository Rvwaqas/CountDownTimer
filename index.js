import inquirer from 'inquirer';
import { differenceInSeconds } from 'date-fns';
const res = await inquirer.prompt({
    type: "number",
    message: "Enter your amount of seconds",
    name: "userInput"
});
let input = res.userInput;
function startTime(val) {
    const initTime = new Date().getSeconds(new Date().getSeconds() + val);
    let invertalTime = new Date(initTime);
    setInterval(() => {
        let currentTime = new Date();
        let timeDiff = differenceInSeconds(invertalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired!");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${minute}:${sec}`);
    }, 1000);
}
startTime(input);
