import React, { useEffect } from 'react';
import PieChart from '../../components/PieChart';
import ImageAssets from '../../components/svgAssets/ImageAssets';

const CircularClock = (props) => {
    const { selectedApp, usageSessions } = props;

    return (
        <div className='circular-clock__container'>
            <div className='ccc__clock'>
                <div className='ccc__inner-block'>
                    <PieChart 
                        key={selectedApp}
                        usageSessions={usageSessions}
                    />
                </div>
                <div className='ccc__clock-wrap'>
                    <ImageAssets.AnalogClock 
                        height='115'
                        width='115'
                    />
                </div>
            </div>
        </div>
    );
};

export default CircularClock;