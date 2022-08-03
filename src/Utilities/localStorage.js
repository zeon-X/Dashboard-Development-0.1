//GET DATA FORM LOCAL-STORAGE
const getFromLS = () => {
    const fetchedData = localStorage.getItem('booking-info');
    return JSON.parse(fetchedData);
}


//SET NEW booking DATA TO LOCAL-STORAGE
const setToLS = (pkg) => {
    let Data = {}
    const fetchedData = getFromLS();
    if (fetchedData) {
        Data = fetchedData;
    }
    if (!Data[pkg]) {
        Data[pkg] = 1;
    }
    localStorage.setItem('booking-info', JSON.stringify(Data));
}


//DELETS FORM LOCAL-STORAGE
const deleteFormLS = (id) => {
    let fetchedData = getFromLS();

    delete fetchedData[id];


    localStorage.setItem('booking-info', JSON.stringify(fetchedData));
}


const deleteLS = () => {
    localStorage.removeItem('booking-info')
}


export { getFromLS, setToLS, deleteFormLS, deleteLS }