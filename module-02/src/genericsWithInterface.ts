{
  interface Developer<T, X = null> {
    name: string;
    device: {
      model: string;
      reliseDate: string;
      price: number;
    };
    smartWatch: {
      model: string;
      price: number;
    };
    bike: T;
    car?: X;
  }

  type honda = {
    model: string;
    price: number;
  };

  const poorDeveloper: Developer<honda, null> = {
    name: "akash",
    device: {
      model: "758p",
      reliseDate: "2Feb, 2025",
      price: 2512132,
    },
    smartWatch: {
      model: "jh785",
      price: 300,
    },
    bike: {
      model: "mt50",
      price: 4585555,
    },
  };
  const riceDeveloper: Developer<honda> = {
    name: "akash",
    device: {
      model: "894p",
      reliseDate: "2Feb, 2025",
      price: 251213266,
    },
    smartWatch: {
      model: "jh785",
      price: 300,
    },
    bike: {
      model: "mt50",
      price: 4585555,
    },
  };
}
