fetch('http://localhost:3005/api/v1/users/1/workouts', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Valentino's Thursday Lunch Workout",
        datetime: "2019-09-26T20:57:37.384Z",
        photo: 'https://d2z0k43lzfi12d.cloudfront.net/blog/vcdn277/wp-content/uploads/2018/04/thumbnail_8-tips-beginner_1200x800-1024x683.jpg',
        user_id: 1,
        routine_id: 1
    })
}).then(res => res.json())
.then(data => console.log(data))

fetch('http://localhost:3005/api/v1/users/1/workouts/2', {
    method: 'DELETE',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}).then(res => res.json())
.then(data => console.log(data))

fetch('http://localhost:3005/api/v1/users/1/workouts/3', {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Valentino's Thursday Afternoon Workout"
    })
}).then(res => res.json())
.then(data => console.log(data))

fetch('http://localhost:3005/api/v1/routines', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Murph",
        description: "In memory of Navy Lieutenant Michael Murphy, 29, of Patchogue, N.Y., who was killed in Afghanistan June 28th, 2005.",
        routine_exercises_attributes: [
            {
                exercise_id: 232,
                quantity: 0,
                distance: 1,
                weight: 20,
                duration: 0
            },
            {
                exercise_id: 200,
                quantity: 100,
                distance: 0,
                weight: 20,
                duration: 0
            },
            {
                exercise_id: 214,
                quantity: 200,
                distance: 0,
                weight: 20,
                duration: 0
            },
            {
                exercise_id: 185,
                quantity: 300,
                distance: 0,
                weight: 20,
                duration: 0
            },
            {
                exercise_id: 232,
                quantity: 0,
                distance: 1,
                weight: 20,
                duration: 0
            }
        ]
    })
}).then(res => res.json())
.then(data => console.log(data))