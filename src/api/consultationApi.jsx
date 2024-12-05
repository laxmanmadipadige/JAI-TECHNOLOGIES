import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const consultationApi = createApi({
    "reducerPath": "consultationApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5001/"}),
    endpoints: (builder) => ({
        addConsultation: builder.mutation({
            query: (consultation) => ({
                url: "consultation",
                method: "POST",
                body: consultation,
            })
        })
    })
});

export const {
    useAddConsultationMutation
} = consultationApi;