const Course = (props) => {
    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    }
    const Content = (props) => {
        const Part = (props) => {
            return (
                <p>{props.name} {props.exercises}</p>
            )
        }
        let parts = props.parts.map((value, key) => <Part key={key} name={value.name} exercises={value.exercises}></Part>)
        return (
            <>
                {parts}
            </>
        )
    }
    const Total = (props) => {
        let total = 0;
        props.parts.forEach(value => {
            total += value.exercises
        })
        return (
            <p>
                Number of exercises {total}
            </p>
        )
    }
    return (
        <>
            <Header course={props.course.name}></Header>
            <Content parts={props.course.parts}></Content>
            <Total parts={props.course.parts}></Total>
        </>
    )
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of component",
                exercises: 14
            }
        ]
    };
    return (
        <div>
            <Course course={course}></Course>
        </div>
    );
}

export default App;
