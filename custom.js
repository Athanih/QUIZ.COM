let question_field = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer')
let question_count = document.querySelector('.question-count')
let progress_bar = document.querySelector('.progress-bar')
let score_count = document.querySelector('.score-count')
let answer_feedback = document.querySelector('.answer-feedback')
let result_score = document.querySelector('.result-score')
let result_label = document.querySelector('.result-label')


class Question {
    constructor(question, answer_1, answer_2, correct, answer_4, answer_5) {
        this.question = question
        this.correct = correct
        this.answers = [
            answer_1,
            answer_2,
            answer_4,
            answer_5,
        ]
        this.answers.push(this.correct)
        for (let index = this.answers.length - 1; index > 0; index -= 1) {
            let random_index = Math.floor(Math.random() * (index + 1))
            let temporary_answer = this.answers[index]
            this.answers[index] = this.answers[random_index]
            this.answers[random_index] = temporary_answer
        }
    }


    display () {
        question_field.innerHTML = this.question
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}


const current_questions = [
new Question("2+2", "6", "2", "4", "10", "3", 0),
new Question("2+3", "6", "4", "5", "10", "3", 1),
new Question("3+5", "6", "4", "8", "10", "3", 3),
new Question("10-4", "5", "7", "6", "8", "4", 4),
new Question("4x2", "6", "7", "8", "12", "4", 2),
new Question("12:3", "3", "5", "4", "6", "2", 0),
new Question("7+8", "13", "14", "15", "16", "17", 1),
new Question("9-2", "5", "6", "7", "8", "9", 3),
new Question("(12+8)x2", "36", "38", "40", "42", "44", 4),
new Question("45:5+7", "14", "15", "16", "17", "18", 2),
new Question("9x6-8", "42", "44", "46", "48", "54", 0),
new Question("(25-7)x3", "48", "51", "54", "57", "60", 3),
new Question("144:12+5", "12", "15", "17", "19", "21", 1),
new Question("7x8+6", "54", "56", "60", "62", "64", 3),
new Question("100-(12x4)", "44", "48", "52", "56", "60", 2),
new Question("(18+6):3", "6", "7", "8", "9", "10", 4),
new Question("(36:6)+9", "12", "14", "15", "16", "18", 0),
new Question("5x(14-6)", "32", "36", "40", "42", "48", 2),
new Question("(80-20):4", "10", "12", "15", "18", "20", 4),
new Question("11x3-7", "24", "25", "26", "28", "30", 1)
]


let total_answers_given = 0
let total_questions = current_questions.length
let correct_answers = 0


let current_question = current_questions[total_answers_given]
current_question.display()
question_count.innerHTML = 'SOAL 1 / ' + total_questions
score_count.innerHTML = 'NILAI 0'
result_score.innerHTML = '0 / ' + total_questions
progress_bar.style.width = (1 / total_questions * 100) + '%'


for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            correct_answers += 1
            answer_feedback.innerHTML = 'Benar! Jawabanmu tepat.'
            console.log("Correct")
        } else {
            answer_feedback.innerHTML = 'Belum tepat, lanjut ke soal berikutnya.'
            console.log("Incorrect")
        }
        score_count.innerHTML = 'NILAI ' + correct_answers
        result_score.innerHTML = correct_answers + ' / ' + total_questions
        total_answers_given += 1
        if (total_answers_given >= current_questions.length) {
            question_field.innerHTML = 'Selesai!'
            question_count.innerHTML = 'SELESAI / ' + total_questions
            progress_bar.style.width = '100%'
            result_label.innerHTML = 'Nilai akhir: ' + Math.round(correct_answers / total_questions * 100) + '/100'
            answer_buttons.forEach(function(button) {
                button.style.pointerEvents = 'none'
                button.style.opacity = '.55'
            })
            return
        }
        current_question = current_questions[total_answers_given]
        current_question.display()
        question_count.innerHTML = 'SOAL ' + (total_answers_given + 1) + ' / ' + total_questions
        progress_bar.style.width = ((total_answers_given + 1) / current_questions.length * 100) + '%'
 
    })
} 