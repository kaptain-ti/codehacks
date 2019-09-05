class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
class Student extends Person {
    constructor(firstName, lastName, id, testScores) {
        super(firstName, lastName, id);  
        this.testScores = testScores;
    }

    calculate() {
        let i, total = 0;
        for (i = 0; i < this.testScores.length; i++) {
            total = total + this.testScores[i];
        }

        total = total / this.testScores.length;

        return (total > 89 ? 'O' :
            total > 79 ? 'E' :
                total > 69 ? 'A' :
                    total > 54 ? 'P' :
                        total > 39 ? 'D' : 'T');
    }

    
}
function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}




// https://drive.google.com/open?id=1kRSiFfKwawe4VMXZ8Ei-TtxZhqDXdTOa
// https://drive.google.com/open?id=1SoPDw3HGYxpBS4-G29BL5_IgAvrIINVo
// https://drive.google.com/open?id=1S2bFcIIah7GTt1rklVTYIRohK5EWDU2H