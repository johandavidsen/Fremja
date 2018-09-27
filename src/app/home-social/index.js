import React from 'react'
import GitHub from 'github-api'

const DayLine = ({ name, date }) => (
    <div className="date-line-holder">
        <div className="date-line-title">
            <h2>{ name }</h2>
            <h4>{ date }</h4>
        </div>
        <hr/>
    </div>
)

class HomeController extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            days: [
                {
                    id: '20180430',
                    name: 'Mánadagur',
                    date: '30-04-2018',
                },
                {
                    id: '20180501',
                    name: 'Týsdagur',
                    date: '01-05-2018',
                },
                {
                    id: '20180502',
                    name: 'Mikudagur',
                    date: '02-05-2018',
                },
                {
                    id: '20180503',
                    name: 'Hósdagur',
                    date: '03-05-2018',
                },
                {
                    id: '20180504',
                    name: 'Fríggjadagur',
                    date: '04-05-2018',
                },
                {
                    id: '20180505',
                    name: 'Leygardagur',
                    date: '05-05-2018',
                },
                {
                    id: '20180506',
                    name: 'Sunnudagur',
                    date: '06-05-2018',
                },
            ],
        }
    }

    componentDidMount () {
        const gh = new GitHub({
            token: 'ba8f804cd75ba0c2301c738210919a8c0c351a97'
        })
        const me = gh.getUser();
        me.listNotification(function(err, notifcations) {
            console.log(notifcations)
        });
    }

    render () {
        return (
            <div className="container-fluid">
                {
                    this.state.days.map((day, index) =>
                        <DayLine key={index}
                              name={day.name}
                              date={day.date}
                        />
                    )
                }
            </div>
        )
    }
}

export default HomeController