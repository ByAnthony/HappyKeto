import React, {useState, useEffect} from 'react';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';

const Planning = ({typicalBreakfast, weekendBreakfast, possibleDinner, side}) => {

    const [breakfastMonFri, setbreakfastMonFri] = useState([]);     // 1
    const [breakfastList, setBreakfastList] = useState([]);         // 2
    const [dinnerList, setDinnerList] = useState([]);               // 3
    const [sideList, setSideList] = useState([]);                   // 4

    const [monday, setMonday] = useState([]);                       // 5
    const [tuesday, setTuesday] = useState([]);                     // 6
    const [wednesday, setWednesday] = useState([]);                 // 7
    const [thursday, setThursday] = useState([]);                   // 8
    const [friday, setFriday] = useState([]);                       // 9
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

    useEffect(() => {
        setSideList(side)
    }, [side]);

    const handleClick = function(){
        onClick();
    };
    
    const onClick = function(){
        findMenu();
    }

    const findMenu = function(){
        const breakfast = breakfastMonFri;

        const dinners = dinnerList;
        let dinnerMonday = [];
        let dinnerTuesday = [];
        let dinnerWednesday = [];
        let dinnerThursday = [];
        let dinnerFriday = [];

        if(dinners[0].day === 1){
            dinnerMonday = [dinners[0]];
        }else if(dinners[0].day !== 1){
            dinnerMonday = [dinners[0]];
            dinnerTuesday = [dinners[0]];
        }
        if(dinnerTuesday.length === 0){
            if(dinners[1].day === 1){
                dinnerTuesday = [dinners[1]];
            }else if(dinners[1].day !== 1){
                dinnerTuesday = [dinners[1]];
                dinnerWednesday = [dinners[1]];
            }
        }
        if(dinnerWednesday.length === 0){
            if(dinners[2].day === 1){
                dinnerWednesday = [dinners[2]];
            }else if(dinners[2].day !== 1){
                dinnerWednesday = [dinners[2]];
                dinnerThursday = [dinners[2]];
            }
        }
        if(dinnerThursday.length === 0){
            if(dinners[3].day === 1){
                dinnerThursday = [dinners[3]];
            }else if(dinners[3].day !== 1){
                dinnerThursday = [dinners[3]];
                dinnerFriday = [dinners[3]];
            }
        }
        if(dinnerFriday.length === 0){
            if(dinners[4].day === 1){
                dinnerFriday = [dinners[4]];
            }else if(dinners[4].day !== 1){
                dinnerFriday = [dinners[4]];
            }
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
                            <Monday monday={monday} sideList={sideList} updateMonday={setMonday}/>
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
                            <Tuesday tuesday={tuesday} sideList={sideList}/>
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
                            <Wednesday wednesday={wednesday} sideList={sideList}/>
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
                            <Thursday thursday={thursday} sideList={sideList}/>
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
                            <Friday friday={friday} sideList={sideList}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )

}

export default Planning;
