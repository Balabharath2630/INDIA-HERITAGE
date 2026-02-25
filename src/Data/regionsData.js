const regionsData = {
    North: [
      {
        id: 1,
        name: "Taj Mahal",
        location: "Agra",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        name: "Qutub Minar",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        name: "Red Fort",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        name: "Golden Temple",
        location: "Amritsar",
        image: "https://images.unsplash.com/photo-1609948543911-7efb9c7cdb0c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        name: "Manali Hills",
        location: "Himachal Pradesh",
        image: "https://images.unsplash.com/photo-1623941481618-ecf31a3f3b38?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 6,
        name: "Dal Lake",
        location: "Kashmir",
        image: "https://images.unsplash.com/photo-1629805868389-5e33e0c6c6c3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 7,
        name: "Rishikesh",
        location: "Uttarakhand",
        image: "https://images.unsplash.com/photo-1627126655973-9b73fbb36a55?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 8,
        name: "Haridwar",
        location: "Uttarakhand",
        image: "https://images.unsplash.com/photo-1596118736426-5d7b7b07d7dd?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 9,
        name: "Shimla",
        location: "Himachal Pradesh",
        image: "https://images.unsplash.com/photo-1626015365108-b4b90e1a5da3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 10,
        name: "Leh Ladakh",
        location: "Ladakh",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=800&q=80"
      }
    ],
  
    South: [
      {
        id: 11,
        name: "Meenakshi Temple",
        location: "Madurai",
        image: "https://images.unsplash.com/photo-1627894485220-4a3c2ef0b68f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 12,
        name: "Hampi",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 13,
        name: "Mysore Palace",
        location: "Mysore",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 14,
        name: "Ooty",
        location: "Tamil Nadu",
        image: "https://images.unsplash.com/photo-1611647832580-377268dba7cb?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 15,
        name: "Coorg",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1627031741889-6fae7e5b45fc?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 16,
        name: "Charminar",
        location: "Hyderabad",
        image: "https://images.unsplash.com/photo-1615128878359-1c38a9f03a6b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 17,
        name: "Marina Beach",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 18,
        name: "Alleppey",
        location: "Kerala",
        image: "https://images.unsplash.com/photo-1621335223658-0b5e0df5ad8c?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 19,
        name: "Rameshwaram",
        location: "Tamil Nadu",
        image: "https://images.unsplash.com/photo-1621262411043-6b2fa14a3cd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 20,
        name: "Mahabalipuram",
        location: "Tamil Nadu",
        image: "https://images.unsplash.com/photo-1621624102731-6f91d8a3d790?auto=format&fit=crop&w=800&q=80"
      }
    ],
  
    West: [
      {
        id: 21,
        name: "Gateway of India",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 22,
        name: "Ajanta Caves",
        location: "Maharashtra",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 23,
        name: "Ellora Caves",
        location: "Maharashtra",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 24,
        name: "Udaipur Palace",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 25,
        name: "Jaipur Amber Fort",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 26,
        name: "Rann of Kutch",
        location: "Gujarat",
        image: "https://images.unsplash.com/photo-1609766856924-82df5e1c3c26?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 27,
        name: "Goa Beaches",
        location: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 28,
        name: "Mount Abu",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1627894485220-4a3c2ef0b68f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 29,
        name: "Gir National Park",
        location: "Gujarat",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 30,
        name: "Somnath Temple",
        location: "Gujarat",
        image: "https://images.unsplash.com/photo-1621262411043-6b2fa14a3cd1?auto=format&fit=crop&w=800&q=80"
      }
    ],
  
    East: [
      {
        id: 31,
        name: "Victoria Memorial",
        location: "Kolkata",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 32,
        name: "Konark Sun Temple",
        location: "Odisha",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 33,
        name: "Kaziranga",
        location: "Assam",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 34,
        name: "Darjeeling",
        location: "West Bengal",
        image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 35,
        name: "Gangtok",
        location: "Sikkim",
        image: "https://images.unsplash.com/photo-1626015365108-b4b90e1a5da3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 36,
        name: "Shillong",
        location: "Meghalaya",
        image: "https://images.unsplash.com/photo-1627031741889-6fae7e5b45fc?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 37,
        name: "Bodh Gaya",
        location: "Bihar",
        image: "https://images.unsplash.com/photo-1621262411043-6b2fa14a3cd1?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 38,
        name: "Sundarbans",
        location: "West Bengal",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 39,
        name: "Tawang",
        location: "Arunachal Pradesh",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 40,
        name: "Chilika Lake",
        location: "Odisha",
        image: "https://images.unsplash.com/photo-1609766856924-82df5e1c3c26?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };
  
  export default regionsData;