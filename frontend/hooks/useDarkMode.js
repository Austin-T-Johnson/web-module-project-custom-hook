
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage(initialValue)
    const handleChanges = (updatedValue) => {
        setValue(updatedValue)
    }
    return [value, handleChanges]
}




export default useDarkMode;