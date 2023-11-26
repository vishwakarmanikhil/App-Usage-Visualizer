import React from 'react';

const NetworkFilled = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={props.filledColor}>
                <path d="M8.68964 0.0114832C8.57658 0.0303278 8.47058 0.110417 8.42346 0.209352C8.38813 0.282374 8.38578 0.687531 8.39049 5.02178L8.39755 9.75177L8.45173 9.8295C8.56009 9.98026 8.58835 9.98733 9.28325 9.99439C9.70961 9.99911 9.94281 9.99439 10.0135 9.97555C10.1383 9.94022 10.2561 9.82479 10.2914 9.70466C10.3244 9.58688 10.3268 0.447264 10.2938 0.308286C10.2679 0.192863 10.2066 0.108062 10.103 0.0468168C10.03 0.00441647 9.97579 0.00206089 9.39867 -0.000294685C9.05476 -0.00265026 8.73676 0.00206089 8.68964 0.0114832Z" />
                <path d="M5.80685 1.48225C5.71969 1.5223 5.64196 1.60474 5.60898 1.6919C5.59014 1.73901 5.58307 2.97098 5.58307 5.71522C5.58307 10.0165 5.576 9.75973 5.71263 9.88929C5.81627 9.98351 5.93641 10 6.55357 10C7.17072 10 7.27437 9.98587 7.38273 9.88693C7.52406 9.75502 7.51464 10.0212 7.51464 5.71286C7.51464 1.81439 7.51464 1.75315 7.46753 1.66128C7.44162 1.61181 7.38744 1.54586 7.34504 1.51523C7.2673 1.46105 7.25788 1.46105 6.57241 1.45634C6.02827 1.45163 5.86103 1.45634 5.80685 1.48225Z" />
                <path d="M3.13997 3.12173C3.001 3.13586 2.90913 3.19475 2.83846 3.31253C2.79135 3.39027 2.79135 3.44209 2.78428 6.44309C2.77957 8.12025 2.78428 9.54773 2.79135 9.61604C2.80784 9.76209 2.87851 9.8728 2.99157 9.93875C3.06931 9.98586 3.10935 9.98822 3.75713 9.98822C4.39785 9.98822 4.44496 9.98586 4.52034 9.94111C4.56509 9.9152 4.62163 9.86337 4.6499 9.82804L4.69936 9.76209V6.5538V3.34551L4.64754 3.27249C4.54389 3.12644 4.48265 3.11466 3.83958 3.11231C3.52158 3.10995 3.20829 3.11466 3.13997 3.12173Z" />
                <path d="M0.212001 4.82156C0.141334 4.85689 0.0871561 4.90872 0.0541781 4.96996L0 5.06418V7.38207V9.69759L0.0518226 9.79182C0.0800894 9.84128 0.141334 9.90724 0.188446 9.93551C0.26618 9.98497 0.299158 9.98733 0.897473 9.99439C1.3097 9.99911 1.55939 9.99439 1.62299 9.97555C1.75019 9.94257 1.87739 9.82715 1.90801 9.72115C1.94099 9.59866 1.94099 5.12543 1.90566 5.03592C1.87032 4.93698 1.74548 4.8192 1.6489 4.79329C1.60414 4.78152 1.28614 4.76974 0.942229 4.76974C0.339202 4.76974 0.313291 4.77209 0.212001 4.82156Z" />
            </g>
        </svg>

    );
};

const WifiFilled = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={props.filledColor}>
                <path d="M5.11921 0.0666218C4.225 0.22866 3.28277 0.534732 2.5566 0.900819C1.97447 1.19489 1.00824 1.89705 0.504119 2.37717L0 2.86328L0.354084 3.18736C0.546129 3.3734 0.732173 3.51744 0.756178 3.52344C0.780184 3.52344 0.972229 3.3614 1.17628 3.15735C2.14851 2.20313 3.29478 1.56698 4.68711 1.20089C5.40127 1.01485 6.7996 0.94883 7.58579 1.05686C9.12215 1.27291 10.5925 1.98107 11.7568 3.06133L12.2429 3.51744L12.621 3.17536L12.9991 2.83327L12.4889 2.35316C11.3547 1.27291 9.93834 0.522729 8.35997 0.150642C7.69382 -0.00539517 5.79737 -0.0534065 5.11921 0.0666218Z" />
                <path d="M5.23887 2.1054C4.73475 2.21343 3.99658 2.45948 3.60048 2.65753C2.84431 3.03562 1.52399 4.06186 1.58401 4.2299C1.59601 4.25991 1.76405 4.42795 1.9501 4.60199L2.29818 4.91406L2.64026 4.57198C3.28241 3.94783 4.0986 3.47972 5.04082 3.20966C5.44892 3.08963 5.64097 3.07163 6.55918 3.07163C7.54942 3.07763 7.63944 3.08963 8.11955 3.24567C9.00176 3.53974 9.70993 3.94783 10.3581 4.54197C10.5441 4.71602 10.7242 4.84205 10.7542 4.83004C10.8442 4.80004 11.4203 4.2419 11.4203 4.18189C11.4203 4.10387 10.6461 3.41371 10.2621 3.14965C9.76994 2.81357 8.89973 2.41147 8.26959 2.22543C7.79547 2.0874 7.60343 2.06339 6.67921 2.04539C5.95304 2.03338 5.50893 2.05139 5.23887 2.1054Z" />
                <path d="M5.97771 4.06396C5.47959 4.11797 4.89146 4.29801 4.39934 4.54407C4.07526 4.70611 3.19305 5.37227 3.10303 5.5163C3.06702 5.57031 3.70318 6.21246 3.7992 6.22447C3.8172 6.22447 3.99724 6.08643 4.18929 5.9184C4.57938 5.58832 5.22153 5.25824 5.68364 5.15021C6.09174 5.04819 7.00395 5.06619 7.42405 5.17422C7.89817 5.30025 8.50431 5.62433 8.8884 5.96041L9.20047 6.23047L9.56056 5.9184C9.7586 5.75036 9.92064 5.58832 9.92064 5.55831C9.92064 5.5343 9.77661 5.38427 9.60857 5.22823C8.61833 4.34002 7.34003 3.92593 5.97771 4.06396Z" />
                <path d="M6.09174 6.10664C5.71365 6.16065 5.12551 6.44272 4.79544 6.72479L4.56738 6.92283L4.96348 7.27092L5.36557 7.625L5.52761 7.46896C6.03173 6.98885 7.00996 7.00085 7.55009 7.49297C7.67011 7.60099 7.68212 7.59499 8.0482 7.26492C8.41429 6.94084 8.42029 6.92884 8.31827 6.81481C7.84416 6.28668 6.89593 5.98661 6.09174 6.10664Z" />
                <path d="M6.06781 8.14524C5.45567 8.46932 5.35964 9.32752 5.88777 9.76562C6.28386 10.0897 6.76998 10.0777 7.15407 9.72961C7.56216 9.36353 7.59817 8.75138 7.23809 8.37329C6.90801 8.01921 6.4699 7.93519 6.06781 8.14524Z" />
            </g>
        </svg>
    );
};

const BatteryFilled = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill={props.filledColor}>
                <path d="M1.36943 0.14285C0.814258 0.346414 0.555176 0.568484 0.268335 1.05889L0 1.53079V4.99139V8.44273L0.240576 8.89613C0.508911 9.37728 0.980811 9.75665 1.48972 9.9047C1.97088 10.0435 16.1741 10.025 16.7293 9.88619C17.2752 9.7474 17.9507 9.09969 18.1172 8.55377C18.2745 8.0171 18.2745 1.98418 18.1172 1.44751C17.9507 0.901589 17.2752 0.253884 16.7293 0.11509C16.0631 -0.0514622 1.83208 -0.0329561 1.36943 0.14285ZM16.6553 1.00337C16.8311 1.08665 17.0717 1.29947 17.1827 1.47527C17.3955 1.78987 17.3955 1.81763 17.3955 5.00064C17.3955 8.18365 17.3955 8.21141 17.1827 8.52601C16.7386 9.20147 17.1642 9.16446 9.08638 9.16446C1.05483 9.16446 1.38794 9.19222 1.00857 8.57227C0.842017 8.30394 0.832764 8.05411 0.832764 5.01915C0.832764 2.34505 0.860523 1.7066 0.962305 1.49378C1.11035 1.21619 1.4157 0.984866 1.71179 0.901589C1.81358 0.883083 5.14463 0.855325 9.11414 0.846072C15.8133 0.836819 16.3499 0.846072 16.6553 1.00337Z" />
                <path d="M2.0824 1.78095C1.67527 2.01228 1.67527 2.05854 1.66602 4.97322C1.66602 6.5092 1.69377 7.83237 1.72153 7.91565C1.87883 8.32278 1.99912 8.33203 7.77295 8.33203H13.2322V5.00097V1.66992H7.75445C3.80344 1.67917 2.21194 1.70693 2.0824 1.78095Z" />
                <path d="M19.0605 5.00198V7.04688L19.2734 6.99136C19.6712 6.87107 20.1894 6.44543 20.43 6.02905C20.7816 5.42761 20.7816 4.57634 20.43 3.9749C20.1894 3.55852 19.6712 3.13288 19.2734 3.0126L19.0605 2.95708V5.00198Z" />
            </g>
        </svg>
    );
};

const leftArrowFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.81905 2.80043C0.999522 4.67365 0.0745458 5.66978 0.0319482 5.80134C-0.0106494 5.93917 -0.0106494 6.05194 0.0319482 6.17724C0.129314 6.44037 5.42967 11.8846 5.67309 11.9723C6.166 12.1352 6.65283 11.5463 6.4155 11.0702C6.37899 10.995 5.41141 9.96753 4.27345 8.78346L2.19225 6.64084H7.98553C12.1236 6.64084 13.8214 6.62205 13.9309 6.57193C14.2961 6.39651 14.363 5.80761 14.0526 5.50689L13.8944 5.35653L8.05855 5.3252L2.22268 5.29388L4.32213 3.13247C6.60415 0.783117 6.61632 0.764323 6.39116 0.344572C6.26945 0.106504 6.07472 0 5.76437 0C5.55138 0 5.42359 0.125299 2.81905 2.80043Z" fill="url(#paint0_linear_0_229)" />
            <defs>
                <linearGradient id="paint0_linear_0_229" x1="-3.72529e-07" y1="-3.57628e-07" x2="12.5" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#16A9B1" />
                    <stop offset="1" stopColor="#B5D654" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const InfoCircleFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.34151 0.01756C4.70578 0.184694 3.21528 0.888849 2.05904 2.04235C-0.686346 4.78225 -0.686346 9.22089 2.05904 11.9608C3.17144 13.0705 4.52769 13.7363 6.14971 13.9664C6.47576 14.013 7.55254 14.0102 7.88955 13.9637C9.47869 13.7445 10.8733 13.0595 11.9693 11.9581C13.2406 10.6785 13.9502 9.05102 14.0187 7.24816C14.09 5.30009 13.3557 3.43148 11.9665 2.04235C10.8897 0.962827 9.52527 0.280591 7.98545 0.0531788C7.65118 0.00386047 6.67851 -0.0180588 6.34151 0.01756ZM7.34979 3.74109C7.79913 3.95206 7.88681 4.48634 7.52514 4.79595C7.36897 4.93021 7.18814 4.985 6.94702 4.96856C6.547 4.94117 6.26479 4.66992 6.26479 4.31099C6.26205 3.83425 6.87031 3.51642 7.34979 3.74109ZM7.41555 5.91109C7.49774 5.94123 7.5909 6.00151 7.64022 6.05905L7.72516 6.15494V8.00712C7.72516 10.1552 7.74981 9.97163 7.42925 10.1305C7.26485 10.2127 7.22375 10.221 7.01278 10.221C6.73879 10.2182 6.55522 10.1497 6.40726 9.99903L6.31411 9.90313L6.30589 8.04548L6.30041 6.19056L6.36342 6.09467C6.52782 5.84807 7.01552 5.76314 7.41555 5.91109Z" fill="url(#paint0_linear_1_2)" />
            <defs>
                <linearGradient id="paint0_linear_1_2" x1="16.8607" y1="22.7069" x2="-1.97273" y2="-5.25034" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2F80ED" />
                    <stop offset="1" stopColor="#B2FFDA" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const ClockFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.23461 0.0363188C5.74086 0.189444 4.38149 0.723819 3.16586 1.63007C2.77211 1.92694 1.92211 2.77382 1.63149 3.16444C0.859611 4.19569 0.362736 5.32069 0.143986 6.51444C-0.274764 8.77694 0.243986 10.9832 1.63149 12.8394C1.92211 13.2301 2.77211 14.0769 3.16586 14.3738C4.30336 15.2238 5.56586 15.7394 7.01586 15.9457C7.38461 15.9988 8.61274 15.9957 9.00024 15.9457C10.8096 15.6957 12.4284 14.8926 13.6596 13.6363C14.0534 13.2363 14.1471 13.1301 14.3971 12.7988C15.2096 11.7269 15.7409 10.4144 15.944 8.98632C15.9971 8.61757 15.9971 7.38632 15.944 7.01757C15.7627 5.75507 15.319 4.55819 14.6627 3.58007C13.3784 1.66132 11.4034 0.417569 9.10961 0.0769434C8.72524 0.0206938 7.61586 -0.00430584 7.23461 0.0363188ZM8.29086 2.95194C8.35961 2.98632 8.44711 3.07382 8.48774 3.14569L8.56274 3.27382V5.49569V7.72069L9.93774 8.82069C10.969 9.64569 11.3252 9.94569 11.3659 10.0301C11.394 10.0926 11.419 10.2144 11.419 10.3051C11.419 10.6051 11.1752 10.8457 10.8659 10.8457C10.7815 10.8457 10.669 10.8238 10.6159 10.7988C10.4752 10.7301 7.59399 8.41132 7.51899 8.30507C7.45336 8.21757 7.45336 8.18007 7.44399 5.74569L7.43774 3.27694L7.50649 3.15507C7.61586 2.95819 7.86586 2.83632 8.07836 2.87069C8.13149 2.87694 8.22524 2.91444 8.29086 2.95194Z" fill="url(#paint0_linear_0_23)" />
            <defs>
                <linearGradient id="paint0_linear_0_23" x1="-2.7998" y1="-2.79806" x2="17.6002" y2="19.6019" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FA7CBB" />
                    <stop offset="1" stopColor="#F14658" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const LocationFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.1642 0C1.86803 0 0 1.86831 0 4.16453C0 6.37485 3.77825 11.5389 3.93913 11.7576L4.08927 11.9619C4.10683 11.986 4.13479 12 4.1642 12C4.19407 12 4.22185 11.986 4.23959 11.9619L4.38964 11.7576C4.55061 11.5389 8.32877 6.37485 8.32877 4.16453C8.32877 1.86831 6.46043 0 4.1642 0ZM4.1642 2.67281C4.98692 2.67281 5.65593 3.34184 5.65593 4.16453C5.65593 4.9868 4.98689 5.65626 4.1642 5.65626C3.34196 5.65626 2.67247 4.9868 2.67247 4.16453C2.67247 3.34184 3.34193 2.67281 4.1642 2.67281Z" fill="url(#paint0_linear_0_38)" />
            <defs>
                <linearGradient id="paint0_linear_0_38" x1="4.16438" y1="0" x2="4.16438" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FA7CBB" />
                    <stop offset="1" stopColor="#F14658" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const GrowthFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16406 0.351562V0.703125H9.97734H10.793L9.79688 1.70156C9.24844 2.25 8.48672 3.00469 8.10234 3.37969L7.40391 4.06406L6 2.66016L4.59609 1.25625L2.66719 3.17578C1.60547 4.23047 0.595313 5.23359 0.421875 5.40703L0.105469 5.71875L0.358594 5.96953L0.609375 6.22266L2.175 4.66406C3.03516 3.80625 3.93047 2.91562 4.16719 2.68359L4.59375 2.26172L5.99766 3.66562L7.40391 5.07187L9.34453 3.14062L11.2852 1.21172L11.2922 2.01094L11.2969 2.8125H11.6484H12V1.40625V-4.76837e-07H10.582H9.16406V0.351562Z" fill="url(#paint0_linear_0_34)" />
            <path d="M9.16406 7.75781V11.2969H8.8125H8.46094V9.16406V7.03125H7.40625H6.35156V9.16406V11.2969H6H5.64844V8.46094V5.625H4.59375H3.53906V8.46094V11.2969H3.1875H2.83594V9.51562V7.73438H1.76953H0.703125V9.51562V11.2969H0.351562H0V11.6484V12H6H12V11.6484V11.2969H11.6484H11.2969V7.75781V4.21875H10.2305H9.16406V7.75781Z" fill="url(#paint1_linear_0_34)" />
            <defs>
                <linearGradient id="paint0_linear_0_34" x1="6.05273" y1="6.22266" x2="6.05273" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FA7CBB" />
                    <stop offset="1" stopColor="#F14658" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_34" x1="6" y1="12" x2="6" y2="4.21875" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FA7CBB" />
                    <stop offset="1" stopColor="#F14658" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const GameFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.54062 0.0186167C3.45653 0.128443 2.5106 0.762604 1.77016 1.87504C0.856115 3.2461 0.268011 4.95019 0.0448146 6.87039C-0.0224985 7.45849 -0.0118701 9.02441 0.0625286 9.63377C0.190069 10.6541 0.367209 11.1855 0.700232 11.554C1.10765 11.9968 1.81267 12.1279 2.36889 11.8657C2.8578 11.6354 3.75058 10.8631 4.56897 9.96679C5.43341 9.02086 5.45821 8.99252 5.69558 8.88624L5.91523 8.7835H9.0506H12.186L12.4163 8.89332C12.604 8.98189 12.7068 9.06692 12.9654 9.35034C14.3896 10.9127 15.13 11.5823 15.7713 11.8764C15.9945 11.9791 16.0618 11.9933 16.3204 11.9933C17.2841 11.9933 17.7801 11.391 17.9926 9.97033C18.1733 8.73744 18.1556 7.34512 17.9395 6.05554C17.5675 3.81649 16.4728 1.6235 15.2788 0.713004C14.627 0.217013 14.0141 0.00798798 13.2134 0.00798798C12.3206 0.00798798 11.442 0.298497 10.5244 0.89723C10.3756 0.992886 10.1489 1.1098 10.0142 1.15585C9.79459 1.23025 9.72019 1.23734 9.0506 1.23734C8.38102 1.23734 8.30662 1.23025 8.08696 1.15585C7.95234 1.1098 7.72914 0.996428 7.59097 0.904316C6.79739 0.387067 5.97546 0.0753012 5.29524 0.0292444C5.12873 0.0186167 4.95513 0.00798798 4.90553 0.000902176C4.85593 -0.00264072 4.69296 0.00444508 4.54062 0.0186167ZM13.0717 2.15847C13.5039 2.41 13.6775 2.99457 13.4508 3.44096C13.2913 3.74918 12.9052 3.98301 12.5544 3.98301C12.2072 3.98301 11.8388 3.73147 11.6794 3.38427C11.605 3.22485 11.5943 3.15753 11.6085 2.94142C11.6262 2.66863 11.6829 2.53046 11.8565 2.33561C12.1399 2.00967 12.6855 1.92818 13.0717 2.15847ZM5.47238 2.77137L5.66723 2.83514L5.67786 3.4445L5.68495 4.05386H6.26951H6.85407L6.94973 4.23809C7.08081 4.48963 7.08789 4.82974 6.9639 5.12379L6.88241 5.32927H6.24825H5.61409V5.93509V6.53736L5.44758 6.6153C5.19604 6.73222 4.73548 6.72513 4.52645 6.60822L4.37411 6.51965V5.92446V5.32927H3.77892H3.18373L3.12705 5.21236C2.97825 4.90059 2.97471 4.51443 3.11288 4.1814L3.16602 4.05386H3.78601H4.40954V3.43387C4.40954 3.09376 4.41308 2.81388 4.42017 2.81388C4.42371 2.81388 4.49102 2.78908 4.56897 2.76074C4.76382 2.68989 5.23147 2.69697 5.47238 2.77137ZM15.5304 3.6181C16.0795 3.95821 16.1575 4.70928 15.6898 5.16276C15.5268 5.31864 15.2399 5.43555 15.0202 5.43555C14.6766 5.43555 14.2975 5.19464 14.1345 4.86871C14.0424 4.69157 14.0247 4.34791 14.0955 4.13889C14.2904 3.55433 15.006 3.2957 15.5304 3.6181ZM13.0044 4.82619C13.3303 4.9927 13.5145 5.27967 13.5429 5.65875C13.557 5.87486 13.55 5.91737 13.4437 6.12994C13.2524 6.51965 12.9193 6.70388 12.4694 6.66845C11.9557 6.62593 11.5979 6.21851 11.605 5.68709C11.6085 5.30093 11.7927 5.01042 12.1364 4.83682C12.3419 4.73054 12.3879 4.72345 12.6111 4.73762C12.7705 4.74471 12.9123 4.78014 13.0044 4.82619Z" fill="url(#paint0_linear_0_39)" />
            <defs>
                <linearGradient id="paint0_linear_0_39" x1="8.62668" y1="-1.94096" x2="8.62668" y2="14.0184" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const TileFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.45936 0.0217676C0.731089 0.148791 0.248401 0.58067 0.0508093 1.28918C0.00564548 1.4529 0 1.59403 0 2.55941C0 3.52479 0.00564548 3.66592 0.0508093 3.82964C0.242755 4.51839 0.688748 4.93333 1.38879 5.07447C1.64001 5.1281 1.7501 5.13092 2.65337 5.11963C3.75424 5.10834 3.82199 5.09987 4.21999 4.90793C4.62647 4.71034 4.92285 4.32362 5.05835 3.81553C5.10351 3.64052 5.10916 3.49656 5.10916 2.5453C5.10916 1.50935 5.10633 1.46419 5.04423 1.24684C4.95108 0.925044 4.82688 0.707693 4.61518 0.49881C4.40912 0.289927 4.19177 0.165727 3.88126 0.072577C3.68085 0.0132995 3.61593 0.00765371 2.63926 0.00200844C2.07189 -0.000814438 1.54121 0.00765371 1.45936 0.0217676Z" fill="url(#paint0_linear_0_50)" />
            <path d="M8.41176 0.0104771C7.60163 0.131855 7.08507 0.61172 6.927 1.39362C6.87336 1.64484 6.87054 1.75493 6.88183 2.65821C6.89312 3.75907 6.90159 3.82682 7.09354 4.22482C7.23185 4.51274 7.48872 4.76961 7.77664 4.90793C8.17465 5.09987 8.24239 5.10834 9.34326 5.11963C10.2465 5.13092 10.3566 5.1281 10.6078 5.07447C11.3079 4.93333 11.7539 4.51839 11.9458 3.82964C11.991 3.66592 11.9966 3.52479 11.9966 2.55941C11.9966 1.59403 11.991 1.4529 11.9458 1.28918C11.7652 0.64277 11.3672 0.244764 10.7264 0.0584636C10.5824 0.0161223 10.4074 0.00765419 9.52674 0.00483131C8.95937 -0.000813961 8.45974 0.00200891 8.41176 0.0104771Z" fill="url(#paint1_linear_0_50)" />
            <path d="M1.39726 6.91907C0.700039 7.06021 0.259692 7.46104 0.064923 8.13285C0.00282274 8.3502 0 8.39536 0 9.44542C0 10.4108 0.00564548 10.5519 0.0508093 10.7157C0.231465 11.3621 0.637939 11.7657 1.28435 11.9492C1.44806 11.9944 1.5892 12 2.55458 12C3.51995 12 3.66109 11.9944 3.82481 11.9492C4.51356 11.7572 4.9285 11.3113 5.06964 10.6112C5.12327 10.3572 5.12609 10.2499 5.1148 9.33251C5.10633 8.39254 5.10069 8.31633 5.04141 8.11874C4.8918 7.62193 4.62082 7.28885 4.2087 7.08844C3.80223 6.89367 3.66956 6.87673 2.54893 6.87955C1.87148 6.88238 1.52428 6.89367 1.39726 6.91907Z" fill="url(#paint2_linear_0_50)" />
            <path d="M8.27066 6.91907C7.70046 7.04609 7.29964 7.34248 7.08511 7.7913C6.90163 8.17801 6.89316 8.23164 6.88187 9.30429C6.86776 10.3572 6.88187 10.5519 7.00607 10.8991C7.15568 11.3197 7.42384 11.6161 7.8162 11.8052C8.18598 11.9831 8.32147 12 9.44209 12C10.303 12 10.4752 11.9915 10.6559 11.9492C11.3418 11.7883 11.7596 11.3846 11.943 10.6987C11.991 10.5237 11.9967 10.391 11.9967 9.43131C11.9967 8.39536 11.9938 8.3502 11.9317 8.13285C11.7539 7.51749 11.3531 7.12231 10.7264 6.94165C10.5825 6.89931 10.4018 6.89367 9.49855 6.88802C8.69407 6.88238 8.4005 6.89084 8.27066 6.91907Z" fill="url(#paint3_linear_0_50)" />
            <defs>
                <linearGradient id="paint0_linear_0_50" x1="2.55458" y1="5.125" x2="2.55458" y2="0.0014677" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06966" />
                    <stop offset="1" stopColor="#FAD6A6" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_50" x1="9.43655" y1="5.125" x2="9.43655" y2="0.00189447" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06966" />
                    <stop offset="1" stopColor="#FAD6A6" />
                </linearGradient>
                <linearGradient id="paint2_linear_0_50" x1="2.56008" y1="12" x2="2.56008" y2="6.87929" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06966" />
                    <stop offset="1" stopColor="#FAD6A6" />
                </linearGradient>
                <linearGradient id="paint3_linear_0_50" x1="9.43706" y1="12" x2="9.43706" y2="6.88637" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06966" />
                    <stop offset="1" stopColor="#FAD6A6" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const PlayFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.35787 0.0163307C0.759354 0.0901566 0.242571 0.522567 0.0580062 1.11054L0 1.2951V6.00151C0 10.4917 0.00263664 10.7158 0.0474596 10.8635C0.179292 11.2906 0.487779 11.6624 0.856909 11.8338C1.22868 12.0104 0.914916 11.9999 5.72152 11.9999H10.0983L10.2117 11.934C10.4042 11.8232 10.5097 11.5859 10.4543 11.3829C10.4253 11.2695 10.304 11.1113 10.2065 11.056C10.1643 11.0322 9.13334 11.0217 5.77162 11.0111L1.39215 10.998L1.26295 10.9189C1.04938 10.7844 0.951829 10.5418 1.01774 10.3045C1.05993 10.1516 1.23395 9.9723 1.37369 9.93275C1.44488 9.91166 2.80539 9.90375 5.77425 9.90375C9.88742 9.90375 10.0773 9.90111 10.1774 9.85365C10.3119 9.79301 10.4174 9.66909 10.4543 9.53462C10.4728 9.46343 10.4807 8.11083 10.4754 5.23161C10.4675 1.24501 10.4648 1.02353 10.42 0.886424C10.2856 0.483017 10.0008 0.195622 9.60266 0.0585175L9.43919 0.00314808L5.48422 0.000511169C3.30899 -0.00212574 1.45279 0.00578403 1.35787 0.0163307ZM1.99067 4.94686V8.90182H1.70855C1.45543 8.90182 1.16803 8.94137 1.03356 8.99411C0.991378 9.01256 0.988742 8.83327 0.994015 5.20788L1.00192 1.40057L1.07311 1.27665C1.14958 1.14745 1.28141 1.0499 1.42115 1.01826C1.46597 1.00507 1.61363 0.997163 1.7481 0.994526L1.99067 0.991889V4.94686ZM5.5475 3.35169C5.60551 3.37278 6.01946 3.62326 6.46242 3.90802C7.16376 4.35888 7.27978 4.44326 7.34833 4.54872C7.54608 4.85985 7.50389 5.23952 7.2455 5.47682C7.15058 5.56647 5.69779 6.4972 5.5765 6.54994C5.32866 6.65277 4.95953 6.55521 4.77233 6.33637C4.60358 6.14126 4.59831 6.08325 4.60622 4.88885C4.61413 3.70236 4.60885 3.75246 4.80924 3.54152C5.00699 3.33059 5.28647 3.2594 5.5475 3.35169Z" fill="url(#paint0_linear_0_57)" />
            <defs>
                <linearGradient id="paint0_linear_0_57" x1="5.54684" y1="-0.0692149" x2="5.62594" y2="12.0626" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
            </defs>
        </svg>

    );
};

const PeopleFilledColoured = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2779 5.31302C13.2132 5.31302 13.9715 4.55476 13.9715 3.6194C13.9715 2.68404 13.2132 1.92578 12.2779 1.92578C11.3425 1.92578 10.5843 2.68404 10.5843 3.6194C10.5843 4.55476 11.3425 5.31302 12.2779 5.31302Z" fill="url(#paint0_linear_0_59)" />
            <path d="M8.89073 9.05002C8.87483 8.59242 8.95122 8.1363 9.11536 7.70885C9.27951 7.2814 9.52803 6.89138 9.84613 6.56204C10.1642 6.23269 10.5454 5.97076 10.9669 5.79187C11.3884 5.61298 11.8416 5.52079 12.2994 5.52079C12.7573 5.52079 13.2105 5.61298 13.632 5.79187C14.0535 5.97076 14.4346 6.23269 14.7527 6.56204C15.0708 6.89138 15.3194 7.2814 15.4835 7.70885C15.6476 8.1363 15.724 8.59242 15.7081 9.05002C15.7081 9.91977 12.3015 10.0703 12.3015 10.0703C12.3015 10.0703 8.89073 10.0627 8.89073 9.05002Z" fill="url(#paint1_linear_0_59)" />
            <path d="M3.38933 5.31302C4.32469 5.31302 5.08295 4.55476 5.08295 3.6194C5.08295 2.68404 4.32469 1.92578 3.38933 1.92578C2.45397 1.92578 1.69571 2.68404 1.69571 3.6194C1.69571 4.55476 2.45397 5.31302 3.38933 5.31302Z" fill="url(#paint2_linear_0_59)" />
            <path d="M0.00205834 9.05002C-0.0138462 8.59242 0.0625499 8.1363 0.226692 7.70885C0.390835 7.2814 0.639362 6.89138 0.95746 6.56204C1.27556 6.23269 1.65671 5.97076 2.0782 5.79187C2.49969 5.61298 2.95288 5.52079 3.41076 5.52079C3.86864 5.52079 4.32184 5.61298 4.74332 5.79187C5.16481 5.97076 5.54597 6.23269 5.86406 6.56204C6.18216 6.89138 6.43069 7.2814 6.59483 7.70885C6.75897 8.1363 6.83537 8.59242 6.81947 9.05002C6.81947 9.91977 3.41282 10.0703 3.41282 10.0703C3.41282 10.0703 0.00205834 10.0627 0.00205834 9.05002Z" fill="url(#paint3_linear_0_59)" />
            <path d="M7.79898 4.9903C9.17701 4.9903 10.2941 3.87318 10.2941 2.49515C10.2941 1.11712 9.17701 0 7.79898 0C6.42095 0 5.30383 1.11712 5.30383 2.49515C5.30383 3.87318 6.42095 4.9903 7.79898 4.9903Z" fill="url(#paint4_linear_0_59)" />
            <path d="M2.80874 10.4969C2.80155 9.83287 2.92613 9.174 3.17528 8.55843C3.42442 7.94286 3.79318 7.38282 4.2602 6.91071C4.72723 6.4386 5.28325 6.0638 5.89609 5.80801C6.50893 5.55222 7.16642 5.42052 7.83049 5.42052C8.49457 5.42052 9.15206 5.55222 9.76489 5.80801C10.3777 6.0638 10.9338 6.4386 11.4008 6.91071C11.8678 7.38282 12.2366 7.94286 12.4857 8.55843C12.7349 9.174 12.8594 9.83287 12.8523 10.4969C12.8523 11.7777 7.83079 12 7.83079 12C7.83079 12 2.80874 11.9888 2.80874 10.4969Z" fill="url(#paint5_linear_0_59)" />
            <defs>
                <linearGradient id="paint0_linear_0_59" x1="12.2779" y1="1.92578" x2="12.2779" y2="5.31302" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_59" x1="8.88867" y1="7.79555" x2="15.7102" y2="7.79555" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
                <linearGradient id="paint2_linear_0_59" x1="3.38933" y1="1.92578" x2="3.38933" y2="5.31302" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
                <linearGradient id="paint3_linear_0_59" x1="0" y1="7.79555" x2="6.82152" y2="7.79555" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
                <linearGradient id="paint4_linear_0_59" x1="7.79898" y1="0" x2="7.79898" y2="4.9903" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
                <linearGradient id="paint5_linear_0_59" x1="2.80844" y1="8.71026" x2="12.8525" y2="8.71026" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAD6A6" />
                    <stop offset="1" stopColor="#F06966" />
                </linearGradient>
            </defs>
        </svg>

    )
}

const IconAssets = {
    NetworkFilled,
    WifiFilled,
    BatteryFilled,
    leftArrowFilledColoured,
    InfoCircleFilledColoured,
    ClockFilledColoured,
    LocationFilledColoured,
    GrowthFilledColoured,
    GameFilledColoured,
    TileFilledColoured,
    PlayFilledColoured,
    PeopleFilledColoured
};

export default IconAssets;