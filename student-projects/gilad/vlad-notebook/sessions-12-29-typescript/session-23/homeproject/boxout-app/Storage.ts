
export function load<T>(key: string): T | null {
    const fetchedData = localStorage.getItem(key);
    
    if(!fetchedData) return null;
    return JSON.parse(fetchedData) as T;
}

export function save<T>(key: string, target: T) {
    const serialized = JSON.stringify(target);

    localStorage.setItem(key, serialized)
}

export function clearAll() {
    localStorage.clear()
}

export function remove(key: string) {
    localStorage.removeItem(key);
}
