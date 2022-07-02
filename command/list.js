import chalk from 'chalk';
import shellJs from 'shelljs'

export const compiler = (fileName = { exec: "" }) => {
    if (!fileName.exec) {
        shellJs.exec('easyy -h')

        return shellJs.echo(chalk.red.bold("\nFatal Error: No file provided!"))
    }

    let file = fileName.exec.split('.')[0]
    let extension = fileName.exec.split('.')[1]

    if (!extension)
        return shellJs.echo(chalk.red.bold("No file extension provided!!!"))


    if (extension === "c" || extension === "C") {
        shellJs.echo(chalk.green.bold("Please wait... Your file is being compiled!\n"))
        shellJs.exec(`gcc ${fileName.exec} -o ${file} && ${file}`)
        shellJs.rm('-f', `${file}.exe`)
    } else if (extension === "cpp" || extension === "CPP") {
        shellJs.echo(chalk.green.bold("Please wait... Your file is being compiled!\n"))
        shellJs.exec(`g++ ${fileName.exec} -o ${file} && ${file}`)
        shellJs.rm('-f', `${file}.exe`)
    } else if (extension !== undefined) {
        shellJs.echo(chalk.red.bold("Wrong file given for compilation!\nPlease select a file with extension .c or .cpp"))
    } else {
        shellJs.echo(chalk.red.bold("Something went wrong while compiling..."))
    }
}