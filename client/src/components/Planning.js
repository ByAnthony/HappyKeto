import React, {useState, useEffect} from 'react';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';

const Planning = ({typicalBreakfast, weekendBreakfast, possibleDinner}) => {

    const [breakfastMonFri, setbreakfastMonFri] = useState([]);     // 1
    const [breakfastList, setBreakfastList] = useState([]);         // 2
    const [dinnerList, setDinnerList] = useState([]);               // 3

    const [monday, setMonday] = useState([]);                       // 4
    const [tuesday, setTuesday] = useState([]);                     // 5
    const [wednesday, setWednesday] = useState([]);                 // 6
    const [thursday, setThursday] = useState([]);                   // 7
    const [friday, setFriday] = useState([]);                       // 8
    // const [saturday, setSaturday] = useState([]);
    // const [sunday, setSunday] = useState([]);

    useEffect(() => {
        setbreakfastMonFri(typicalBreakfast)
    }, [typicalBreakfast]);

    useEffect(() => {
        setBreakfastList(weekendBreakfast)
    }, [weekendBreakfast]);

    useEffect(() => {
        setDinnerList(possibleDinner)
    }, [possibleDinner]);

    const handleClick = function(){
        onClick();
    };
    
    const onClick = function(){
        findMenu();
    }

    const findMenu = function(){
        const breakfast = breakfastMonFri;

        const dinners = dinnerList;
        const dinnerMonday = new Array(dinners[0]);
        let dinnerTuesday = new Array();
        if(dinnerMonday[0].day === 2){
            dinnerTuesday = new Array(dinners[0]);
        }else{
            dinnerTuesday = new Array(dinners[1]);
        }
        let dinnerWednesday = new Array();
        if(dinnerTuesday[0].day === 2){
            dinnerWednesday = new Array(dinners[1]);
        }else{
            dinnerWednesday = new Array(dinners[2]);
        }
        let dinnerThursday = new Array();
        if(dinnerWednesday[0].day === 2){
            dinnerThursday = new Array(dinners[2]);
        }else{
            dinnerThursday = new Array(dinners[3]);
        }
        let dinnerFriday = new Array();
        if(dinnerWednesday[0].day === 2){
            dinnerFriday = new Array(dinners[3]);
        }else{
            dinnerFriday = new Array(dinners[4]);
        }

        const mondayMenu = [...breakfast, ...dinnerMonday];
        monday.push(mondayMenu)
        setMonday(mondayMenu);

        const tuesdayMenu = [...breakfast, ...dinnerTuesday];
        tuesday.push(tuesdayMenu)
        setTuesday(tuesdayMenu);

        const wednesdayMenu = [...breakfast, ...dinnerWednesday];
        wednesday.push(wednesdayMenu)
        setWednesday(wednesdayMenu);

        const thursdayMenu = [...breakfast, ...dinnerThursday];
        thursday.push(thursdayMenu)
        setThursday(thursdayMenu);

        const fridayMenu = [...breakfast, ...dinnerFriday];
        friday.push(fridayMenu)
        setFriday(fridayMenu);

        removeDinnerFromList(dinnerMonday);
        removeDinnerFromList(dinnerTuesday);
        removeDinnerFromList(dinnerWednesday);
        removeDinnerFromList(dinnerThursday);
        removeDinnerFromList(dinnerFriday);
    }

    const removeDinnerFromList = function(recipe){
        const copiedDinnerList = [...dinnerList];
        copiedDinnerList.splice(recipe, 1);
        setDinnerList(copiedDinnerList);
    };

    return(
        <>
        <button className="submit-plan" onClick={() => {handleClick()}} type="button">Plan Your Week</button>
        <div className="planning-container">
            <div className="planning">
                <table className="table-week">
                    <tbody>
                        <tr>
                            <td className="day">Monday</td>
                            <Monday monday={monday}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="planning-container">
            <div className="planning">
                <table className="table-week">
                    <tbody>
                        <tr>
                            <td className="day">Tuesday</td>
                            <Tuesday tuesday={tuesday}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="planning-container">
            <div className="planning">
                <table className="table-week">
                    <tbody>
                        <tr>
                            <td className="day">Wednesday</td>
                            <Wednesday wednesday={wednesday}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="planning-container">
            <div className="planning">
                <table className="table-week">
                    <tbody>
                        <tr>
                            <td className="day">Thursday</td>
                            <Thursday thursday={thursday}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="planning-container">
            <div className="planning">
                <table className="table-week">
                    <tbody>
                        <tr>
                            <td className="day">Friday</td>
                            <Friday friday={friday}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )

}

export default Planning;
