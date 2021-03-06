import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
    return (
        <>
            <Bar
                data={chartData}
                options={{
                    title: {
                        display: true,
                        text: "Category",
                        fontSize: 20,
                    },
                    Legend: {
                        display: true,
                        position: "right",
                    },
                }}
            />
        </>
    );
};
