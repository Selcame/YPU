function moreNum (num1, num2){
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');
    if(arr1.length>arr2.length){
        console.log(num1)
    }else if(arr1.length<arr2.length){
        console.log(num2)
    }else{
        console.log('equal')
    }
}
moreNum(1,11)

const data =
    {
        "group": "bbmo",
        "students": [
            {
                "name": "Bazenga Marjello",
                "bd": "27.04.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "18.06.2023",
                    "Professor": "Sachkov V.E.",
                    "Score": "3"
                },
                    {
                        "title": "Machine Learning",
                        "date": "01.007.2023",
                        "Professor": "Kazachok A.V.",
                        "Score": "5"
                    },{
                        "title": "TOFU",
                        "date": "26.06.2023",
                        "Professor": "Pantuhin D.V",
                        "Score": "5"
                    }
                ]
            },{
                "name": "Kurganov Ilya",
                "bd": "27.07.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "18.06.2023",
                    "Professor": "Sachkov V.E.",
                    "Score": "4"
                },
                    {
                        "title": "Machine Learning",
                        "date": "01.007.2023",
                        "Professor": "Kazachok A.V.",
                        "Score": "5"
                    },{
                        "title": "TOFU",
                        "date": "26.06.2023",
                        "Professor": "Pantuhin D.V",
                        "Score": "5"
                    }
                ]
            },{
                "name": "Kutnyahov Artem",
                "bd": "27.05.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "18.06.2023",
                    "Professor": "Sachkov V.E.",
                    "Score": "3"
                },
                    {
                        "title": "Machine Learning",
                        "date": "01.007.2023",
                        "Professor": "Kazachok A.V.",
                        "Score": "3"
                    },{
                        "title": "TOFU",
                        "date": "26.06.2023",
                        "Professor": "Pantuhin D.V",
                        "Score": 3
                    }
                ]
            }
        ]

    }

function second(){
    let best = {
        score:0,
        name:"",
        lesson:""
    }
    student = data.students.map(i=>{
        let sum = 0
        i.lessons.map(s=>{
            sum += Number(s.Score)
        })
        if(sum>best.score){
            best.score = sum;
            best.name = i.name;
            best.lesson = i.lessons
        }

    })
    console.log(best)
}
second()