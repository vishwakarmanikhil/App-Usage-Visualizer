import React, { useEffect, useState } from 'react';
import CircularClock from './CircularClock';
import usagesData from '../../components/usagesData.json';
import CustomSelect from '../../components/AppSelector';
import IconAssets from '../../components/svgAssets/IconAssets';
import './style.css';

const Dashboard = () => {
  const [selectedAppID, setSelectedAppID] = useState();
  const [selectedAppData, setSelectedAppData] = useState();
  const [appUsagesData, setAppUsagesData] = useState([]);

  useEffect(() => {
    const firstAppElementID = usagesData?.[0]?.id;
    setSelectedAppID(firstAppElementID);
    appChangeHandler(firstAppElementID);
  }, []);

  const onSelectChangeHandler = (value) => {
    setSelectedAppID(value);
    appChangeHandler(value);
  };

  const appChangeHandler = (appId) => {
    const selectedAppData = usagesData.find((app) => app.id == appId);
    setSelectedAppData(selectedAppData);
    setAppUsagesData(selectedAppData?.usages);
  }

  const getPeekTime = (usages) => {
    let returnTxt = '';

    const dateUsages = usages.map(usage => ({
      start: new Date(usage.start),
      end: new Date(usage.end)
    }));
    
    let longestDuration = 0;
    let longestIntervalIndex = -1;
    
    // Find longest interval between times
    for (let i = 0; i < dateUsages.length; i++) {
      const duration = dateUsages[i].end - dateUsages[i].start;
      if (duration > longestDuration) {
        longestDuration = duration;
        longestIntervalIndex = i;
      }
    }
    
    if (longestIntervalIndex !== -1) {
      const longestPeriod = dateUsages[longestIntervalIndex];

      // Format the times as needed
      const startHour = longestPeriod.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const endHour = longestPeriod.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      returnTxt = `${startHour} - ${endHour}`;
    } else {
      returnTxt =  "No Data found.";
    }

    return returnTxt;
  }

  const getGlobalPeekTime = (usages) => {   
    let returnTxt = ''; 
    const dateUsages = usages.map(usage => ({
      start: new Date(usage.start),
      end: new Date(usage.end)
    }));
    
    // Find earliest start time and latest end time
    let earliestStart = Infinity;
    let latestEnd = -Infinity;
    
    dateUsages.forEach(usage => {
      if (usage.start < earliestStart) {
        earliestStart = usage.start;
      }
      if (usage.end > latestEnd) {
        latestEnd = usage.end;
      }
    });
    
    // Format the times as needed
    const earliestStartFormatted = earliestStart.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const latestEndFormatted = latestEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    returnTxt = `${earliestStartFormatted} - ${latestEndFormatted}`;

    return returnTxt;
  }

  return (
    <div className="dashboard__page">
      <div className="mobile__container">
        <div className="inner__screen">
          <div className='inner__header'>
            <p className="time">9:41</p>
            {/* <div className="controls"><p></p></div> */}
            <div className='icons'>
              <IconAssets.NetworkFilled height='13' width='13' filledColor={'#000'} />
              <IconAssets.WifiFilled height='15' width='15' filledColor={'#000'} />
              <IconAssets.BatteryFilled height='20' width='20' filledColor={'#000'} />
            </div>
          </div>
          <div className="inner__content">
            <div className='ic__header'>
              <button><IconAssets.leftArrowFilledColoured height='12' width='15' /></button>
              <div>
                <p className='h5-heading text-white mb-0'>{selectedAppData?.name}</p>
              </div>
            </div>
            
            <div className='ic__select-wrap'>
              <div>
                <CustomSelect 
                  optionData={usagesData} 
                  value={selectedAppID} 
                  onChange={onSelectChangeHandler} 
                  className={'ic__select'}
                />
              </div>
            </div>

            <div className='ic__info-wrap1'>
              <div>
                <p className='p-l-text txt-semiBold text-white mb-0'>Flow Peaks</p>
                <IconAssets.InfoCircleFilledColoured height='15' width='15' />
              </div>

              <div className='time__badge'>Weekly</div>
            </div>

            <div className='ic__app-usages-wrap'>
              <div>
                <p className='p-m-text mb-0'>Night</p>
                <p className='p-m-text mb-0'>Morning</p>
                <p className='p-m-text mb-0'>Afternoon</p>
                <p className='p-m-text mb-0'>Evening</p>
              </div>
              <CircularClock 
                key={selectedAppID}
                selectedAppID={selectedAppID}
                usageSessions={appUsagesData} 
              />
            </div>

            <div className='ic__card-wrap'>
              <div className='ic__card'>
                <p className='p-m-text text-white mb-10'>My Flow Peaks</p>
                <div>
                  <IconAssets.ClockFilledColoured height='16' width='16' />
                  <p className='p-s-text text-white mb-0'>{appUsagesData?.length !== 0 ? getPeekTime(appUsagesData) : ""}</p>
                </div>
              </div>
              <div className='ic__card'>
                <p className='p-m-text text-white mb-10'>Global Flow Peaks</p>
                <div>
                  <IconAssets.ClockFilledColoured height='16' width='16' />
                  <p className='p-s-text text-white mb-0'>{appUsagesData?.length !== 0 ? getGlobalPeekTime(appUsagesData) : ""}</p>
                </div>
              </div>
            </div>

            <div className='ic__table'>
              <p className='p-l-text text-white text-semiBold mb-0'>My Thriving Toolkit</p>

              <div className='ic__table-wrap'>
                <div className='ictw__row'>
                  <div className='ictw__column'></div>
                  <div className='ictw__column'><div><IconAssets.LocationFilledColoured height='12' width='12' /> For You</div></div>
                  <div className='ictw__column'><div><IconAssets.GrowthFilledColoured height='12' width='12' /> Globally</div></div>
                </div>
                <div className='ictw__row'>
                  <div className='ictw__column'><div><IconAssets.GameFilledColoured height='18' width='18' /> Games</div></div>
                  <div className='ictw__column'><span className='text-semiBold'>Explore</span></div>
                  <div className='ictw__column'><span className='text-semiBold'>Memory Game</span></div>
                </div>
                <div className='ictw__row'>
                  <div className='ictw__column'><div><IconAssets.TileFilledColoured height='18' width='18' /> Tools</div></div>
                  <div className='ictw__column'><span className='text-semiBold'>Affirmation</span></div>
                  <div className='ictw__column'><span className='text-semiBold'>Thought Guides</span></div>
                </div>
                <div className='ictw__row'>
                  <div className='ictw__column'><div><IconAssets.PlayFilledColoured height='18' width='18' /> Lessons</div></div>
                  <div className='ictw__column'><span className='text-semiBold'>Lorem Ipsum</span></div>
                  <div className='ictw__column'><span className='text-semiBold'>Lorem Ipsum</span></div>
                </div>
                <div className='ictw__row'>
                  <div className='ictw__column'><div><IconAssets.PeopleFilledColoured height='18' width='18' /> Clubs</div></div>
                  <div className='ictw__column'><span className='text-semiBold'>Lorem Ipsum</span></div>
                  <div className='ictw__column'><span className='text-semiBold'>Lorem Ipsum</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;