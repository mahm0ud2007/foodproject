const questions = [
    // الكربوهيدرات (5 أسئلة)
    {
        question: "أي من الأطعمة التالية هو مصدر ممتاز للألياف والكربوهيدرات المعقدة، ويساعد على الشعور بالشبع لفترة أطول؟",
        options: ["الخبز الأبيض", "الأرز البني", "المعكرونة البيضاء", "البطاطس المقلية"],
        correct: 1,
        explanation: "الأرز البني غني بالألياف والكربوهيدرات المعقدة التي تهضم ببطء وتوفر طاقة مستدامة."
    },
    {
        question: "ما هي وظيفة الكربوهيدرات البسيطة في الجسم؟",
        options: ["بناء العضلات", "توفير طاقة سريعة", "تنظيم درجة حرارة الجسم", "إنتاج الإنزيمات"],
        correct: 1,
        explanation: "الكربوهيدرات البسيطة تتحول بسرعة إلى جلوكوز، وهو المصدر الرئيسي للطاقة للجسم، خاصة للدماغ."
    },
    {
        question: "أي من الأطعمة التالية يحتوي على نسبة عالية من الكربوهيدرات المكررة، والتي يمكن أن تؤدي إلى ارتفاع سريع في نسبة السكر في الدم؟",
        options: ["الفواكه الطازجة", "الحبوب الكاملة", "المشروبات الغازية", "الخضروات الورقية"],
        correct: 2,
        explanation: "المشروبات الغازية غنية بالسكر المضاف، وهو نوع من الكربوهيدرات المكررة."
    },
    {
        question: "لماذا تعتبر الحبوب الكاملة أفضل من الحبوب المكررة كمصدر للكربوهيدرات؟",
        options: ["لأنها تحتوي على سعرات حرارية أقل", "لأنها تحتوي على المزيد من الألياف والفيتامينات والمعادن", "لأنها أسهل في الهضم", "لأنها تحتوي على نسبة أقل من الدهون"],
        correct: 1,
        explanation: "الحبوب الكاملة تحتفظ بقشرتها التي تحتوي على معظم الألياف والعناصر الغذائية."
    },
    {
        question: "أي من الأطعمة التالية يمكن أن يكون مصدراً جيدًا للكربوهيدرات للأشخاص الذين يتبعون نظامًا غذائيًا نباتيًا؟",
        options: ["اللحوم الحمراء", "البيض", "العدس", "الألبان"],
        correct: 2,
        explanation: "العدس غني بالبروتين والألياف والكربوهيدرات، وهو خيار ممتاز للنباتيين."
    },
    // الدهون (5 أسئلة)
    {
        question: "أي نوع من الدهون يعتبر مفيدًا لصحة القلب؟",
        options: ["الدهون المشبعة", "الدهون المتحولة", "الدهون الأحادية غير المشبعة", "جميع الأنواع السابقة"],
        correct: 2,
        explanation: "الدهون الأحادية غير المشبعة مثل الموجودة في زيت الزيتون والأفوكادو مفيدة لصحة القلب."
    },
    {
        question: "ما هي وظيفة الدهون في الجسم؟",
        options: ["توفير الطاقة فقط", "عزل الأعضاء وحمايتها", "امتصاص الفيتامينات الذائبة في الدهون", "جميع ما سبق"],
        correct: 3,
        explanation: "الدهون تلعب أدوارًا متعددة في الجسم، بما في ذلك توفير الطاقة، عزل الأعضاء، وامتصاص الفيتامينات."
    },
    {
        question: "أي من الأطعمة التالية غني بالدهون المشبعة؟",
        options: ["الأسماك الدهنية", "الزبدة", "الأفوكادو", "المكسرات"],
        correct: 1,
        explanation: "الزبدة غنية بالدهون المشبعة التي يجب تناولها باعتدال."
    },
    {
        question: "ما هي العواقب المحتملة لتناول كمية كبيرة من الدهون المتحولة؟",
        options: ["زيادة خطر الإصابة بأمراض القلب", "تقليل مستوى الكوليسترول الضار", "تحسين الهضم", "زيادة الطاقة"],
        correct: 0,
        explanation: "الدهون المتحولة تزيد من خطر الإصابة بأمراض القلب والأوعية الدموية."
    },
    {
        question: "أي من المصادر التالية هو أفضل مصدر للدهون الصحية؟",
        options: ["اللحوم الحمراء", "الزيوت النباتية", "الأرز الأبيض", "الحلويات"],
        correct: 1,
        explanation: "الزيوت النباتية مثل زيت الزيتون وزيت الأفوكادو غنية بالدهون الصحية."
    },
    // البروتينات (5 أسئلة)
    {
        question: "ما هي الوظيفة الأساسية للبروتينات في الجسم؟",
        options: ["توفير الطاقة", "بناء وإصلاح الأنسجة", "تنظيم درجة حرارة الجسم", "نقل الأكسجين"],
        correct: 1,
        explanation: "البروتينات هي اللبنات الأساسية لبناء جميع خلايا الجسم."
    },
    {
        question: "أي من الأطعمة التالية هو مصدر كامل للبروتين؟",
        options: ["الأرز", "البيض", "الخضروات الورقية", "الفواكه"],
        correct: 1,
        explanation: "البيض يحتوي على جميع الأحماض الأمينية الأساسية التي يحتاجها الجسم."
    },
    {
        question: "ما هي العواقب المحتملة لنقص البروتين في الجسم؟",
        options: ["زيادة الطاقة", "ضعف العضلات وتأخر النمو", "زيادة الوزن", "تحسن الهضم"],
        correct: 1,
        explanation: "نقص البروتين يؤثر على نمو العضلات وإصلاح الأنسجة."
    },
    {
        question: "أي من المجموعات الغذائية التالية هي أفضل مصدر للبروتين النباتي؟",
        options: ["اللحوم والدواجن", "الحبوب الكاملة", "البقوليات والمكسرات", "الألبان"],
        correct: 2,
        explanation: "البقوليات والمكسرات غنية بالبروتين النباتي والألياف."
    },
    {
        question: "لماذا يحتاج الرياضيون إلى كمية أكبر من البروتين؟",
        options: ["لزيادة الوزن", "لبناء وإصلاح العضلات", "لتحسين الهضم", "لزيادة الطاقة"],
        correct: 1,
        explanation: "البروتين ضروري لبناء وإصلاح الأنسجة العضلية بعد التمرين."
    },
    // الفيتامينات والمعادن (5 أسئلة)
    {
        question: "أي من الفيتامينات التالية يعتبر ضروريًا لصحة البشرة ويساعد في إنتاج الكولاجين؟",
        options: ["فيتامين ك", "فيتامين د", "فيتامين سي", "فيتامين بي 12"],
        correct: 2,
        explanation: "فيتامين سي يلعب دورًا حاسمًا في إنتاج الكولاجين الذي يعطي الجلد مرونته وقوته."
    },
    {
        question: "ما هي وظيفة المعادن في الجسم؟",
        options: ["توفير الطاقة", "بناء العظام والأسنان", "تنظيم وظائف الجسم المختلفة", "جميع ما سبق"],
        correct: 3,
        explanation: "المعادن ضرورية لعدد كبير من الوظائف الحيوية في الجسم، مثل تنظيم ضربات القلب، نقل الأكسجين، وبناء العظام."
    },
    {
        question: "أي من الأطعمة التالية غني بالحديد، وهو ضروري لتكوين خلايا الدم الحمراء؟",
        options: ["الموز", "السبانخ", "الأرز الأبيض", "الزيوت النباتية"],
        correct: 1,
        explanation: "السبانخ غنية بالحديد، وهو عنصر أساسي لتكوين الهيموجلوبين الذي يحمل الأكسجين في الدم."
    },
    {
        question: "ما هي العواقب المحتملة لنقص اليود في الجسم؟",
        options: ["فقر الدم", "ضعف العظام", "مشاكل في الغدة الدرقية", "زيادة الوزن"],
        correct: 2,
        explanation: "اليود ضروري لصحة الغدة الدرقية، ونقصه يمكن أن يؤدي إلى مشاكل مثل تضخم الغدة الدرقية."
    },
    {
        question: "أي من الفيتامينات التالية يذوب في الدهون؟",
        options: ["فيتامين ج", "فيتامين ب 12", "فيتامين أ", "فيتامين ك"],
        correct: 2,
        explanation: "فيتامين أ يذوب في الدهون، ويحتاج إلى وجود دهون في الطعام ليتم امتصاصه بشكل جيد."
    },
    // الماء (5 أسئلة)
    {
        question: "ما هي النسبة المئوية الموصى بها من وزن الجسم التي يجب أن تكون ماء؟",
        options: ["50%", "60%", "70%", "80%"],
        correct: 2,
        explanation: "حوالي 70% من وزن الجسم يتكون من الماء."
    },
    {
        question: "ما هي أهمية الماء للجسم؟",
        options: ["تنظيم درجة حرارة الجسم", "نقل العناصر الغذائية والأكسجين", "تسهيل عملية الهضم", "جميع ما سبق"],
        correct: 3,
        explanation: "الماء يلعب دورًا حيويًا في العديد من الوظائف الجسدية مثل تنظيم درجة الحرارة وتحقيق الهضم."
    },
    {
        question: "أي من الخيارات التالية يعتبر أفضل وقت لشرب الماء؟",
        options: ["قبل الوجبات", "بعد الوجبات مباشرة", "عند الشعور بالعطش", "جميع ما سبق"],
        correct: 0,
        explanation: "شرب الماء قبل الوجبات يمكن أن يساعد في تعزيز الهضم والتحكم في الشهية."
    },
    {
        question: "ما هو العواقب المحتملة للجفاف؟",
        options: ["زيادة مستوى الطاقة", "الصداع والإرهاق", "تحسين الهضم", "زيادة التركيز"],
        correct: 1,
        explanation: "الجفاف يمكن أن يؤدي إلى صداع، تعب، وزيادة في صعوبة التركيز."
    },
    {
        question: "أي من الأطعمة التالية يحتوي على نسبة عالية من الماء؟",
        options: ["الجبن", "الفواكه والخضروات", "الخبز", "اللحوم"],
        correct: 1,
        explanation: "الفواكه والخضروات تحتوي على نسبة عالية من الماء، مثل البطيخ والخيار."
    }
];

// باقي الكود دون تغيير


let currentQuestionIndex = 0;

const welcomeScreen = document.getElementById("welcome-screen");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const explanation = document.getElementById("explanation");
const nextButton = document.getElementById("next-button");

document.getElementById("start-button").addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";
    explanation.classList.add("hidden");
    nextButton.classList.add("hidden");

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", function() {
            checkAnswer(index);
        });
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    const buttons = optionsContainer.querySelectorAll(".option-button");
    buttons.forEach((button, index) => {
        if (index === question.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
    });

    explanation.textContent = question.explanation;
    explanation.classList.remove("hidden");
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("لقد أكملت الاختبار!");
        location.reload();
    }
});