import {useTranslation} from "react-i18next";
import Select from "@material-ui/core/Select";
import {MenuItem} from "@material-ui/core";
import React from "react";

const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }


    return (
        <Select
            labelId="demo-simple-select-label"
            value={i18n.language}
            onChange={handleLanguageChange}
        >
            <MenuItem value='en'>EN</MenuItem>
            <MenuItem value='lt'>LT</MenuItem>
            <MenuItem value="de">DE</MenuItem>
        </Select>
    )
}

export default LanguageSelector