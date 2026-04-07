const BASE_URL = "https://knitting-api.onrender.com/api/yarns";

export async function getAllYarns() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch yarns");
    }

    const data = await response.json();

    return data.map((item) => ({
        ...item,
        id: item._id,
        isLocal: false,
    }));
}

export async function getYarnById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch yarn details");
    }

    const data = await response.json();

    return {
        ...data,
        id: data._id,
        isLocal: false,
    };
}