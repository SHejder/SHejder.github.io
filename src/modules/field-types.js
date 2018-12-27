import {check} from "./checker";

/**
 *
 * @return {string}
 */
export function Type ($input) {
    let name = check.name($input);
    let type = check.type($input);
    if (type === 'isHidden') {
        return 'hidden'
    } else if (name === 'isEmail' || type === 'isEmail') {
        return 'email'
    } else if (name === 'isPhone' && type === 'isText') {
        return 'phone'
    } else if (type === 'isText' && name !== 'isPhone' && type !== 'isEmail' && name !== 'isName') {
        return 'text'
    } else if (type === 'isSubmit') {
        return 'submit'
    } else if (name === 'isName' && type === 'isText') {
        return 'name'
    } else {
        return ''
    }
}

