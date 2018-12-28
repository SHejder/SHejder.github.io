import {check} from "./checker";

/**
 *
 * @return {string}
 */
export function Type($input) {
    let name = check.name($input);
    let type = check.type($input);
    if (type === 'isEmail') {
        return 'email'
    } else if (type === 'isText') {
        if (name === 'isName') {
            return 'name'
        } else if (name === 'isPhone') {
            return 'phone'
        }else if (name === 'isEmail') {
            return 'email'
        } else {
            return 'text'
        }
    } else if (type === 'submit') {
        return type
    } else if (type === 'number') {
        return type
    } else {
        return ''
    }
}

