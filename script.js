function calculateResult() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    if (!name || !roll || marks.some(mark => mark < 0 || mark > 100)) {
        alert("Please enter valid student details and marks between 0 and 100.");
        return;
    }

    let total = marks.reduce((a, b) => a + b, 0);
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    let status = percentage >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Roll Number:</b> ${roll}</p>
        <p><b>Total:</b> ${total}/500</p>
        <p><b>Percentage:</b> ${percentage.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        <h3>${status}</h3>
    `;
}