export const updateSearchParams = (title: string, value: string | number): string => {
    const searchParams: URLSearchParams = new URLSearchParams(window.location.search);
    searchParams.set(title, value.toString());
    const newPathName: string = `${window.location.pathname
        }?${searchParams.toString()}`;
    return newPathName
};