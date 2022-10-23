import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../configs";
import {IPeopleResponse} from "../interfaces/people.interface";

import {IPeopleDetails} from "../interfaces/peopleDetails.intervace";


const peopleService = {
    getAll: (page: number): AxiosRes<IPeopleResponse> => axiosService.get(urls.people, {params: {page}}),
    getDetails: (id: string | undefined): AxiosRes<IPeopleDetails> => axiosService.get(`${urls.peopleDetails}/${id}`),
};

export {peopleService};