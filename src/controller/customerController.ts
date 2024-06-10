import { Request, Response } from "express";
import Customer from "../model/customer";

export const getCustomers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    const errorMessage = (err as Error).message;
    res.status(500).json({ message: errorMessage });
  }
};

export const addCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, address, contact } = req.body;
  const customer = new Customer({
    name,
    address,
    contact,
  });
  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    const errorMessage = (err as Error).message;
    res.status(400).json({ message: errorMessage });
  }
};

// import { Request, Response } from "express";
// import axios from "axios";
// import Customer from "../model/customer";

// export const addCustomer = async (req: Request, res: Response) => {
//   const { name, address, contact } = req.body;

//   try {
//     // Use Google Geocoding API to convert address to latitude and longitude
//     const geoResponse = await axios.get(
//       "https://maps.googleapis.com/maps/api/geocode/json",
//       {
//         params: {
//           address,
//           key: process.env.GOOGLE_MAPS_API_KEY,
//         },
//       }
//     );

//     if (geoResponse.data.status !== "OK") {
//       return res
//         .status(400)
//         .json({ message: "Error fetching geolocation data" });
//     }

//     const { lat, lng } = geoResponse.data.results[0].geometry.location;

//     // Create and save new customer
//     const customer = new Customer({
//       name,
//       address,
//       contact,
//       latitude: lat,
//       longitude: lng,
//     });

//     await customer.save();
//     res.status(201).json(customer);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
// export const getCustomers = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const customers = await Customer.find();
//     res.json(customers);
//   } catch (err) {
//     const errorMessage = (err as Error).message;
//     res.status(500).json({ message: errorMessage });
//   }
// };
