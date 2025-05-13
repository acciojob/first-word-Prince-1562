function firstWord(str) {
    // Remove leading whitespace
    str = str.trimStart();
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, spaceIndex);
}

