import React from "react";
import { FlatList, ListRenderItem } from "react-native";



// import DepositMoney from "../../assets/svg/deposit-money.svg";
// import Exchange from "../../assets/svg/exchange.svg";
// import RequestMoney from "../../assets/svg/request-money.svg";
// import SendMoney from "../../assets/svg/sendMoney.svg";
// import TransactionCalculator from "../../assets/svg/transactionCalculator.svg";
// import WithdrawMoney from "../../assets/svg/withdraw.svg";
import ActionCard from "./ActionCard";

const data = [
  {
    title: "Faire un dépôt",
    // icon: <DepositMoney />,
    routeName: "/screens/deposit",
  },
  {
    title: "Faire un retrait",
    // icon: <WithdrawMoney />,
    routeName: "/screens/withdrawMoney",
  },
  {
    title: "Faire un virement",
    // icon: <SendMoney />,
    routeName: "/screens/sendMoney",
  },
  {
    title: "Demander de l'argent",
    // icon: <RequestMoney />,
    routeName: "/screens/requestMoney",
  },
  {
    title: "Echanger",
    // icon: <Exchange />,
    routeName: "/screens/exchange",
  },
  {
    title: "Transactions",
    // icon: <TransactionCalculator />,
    routeName: "/screens/transactions",
  },
];

const renderItem: ListRenderItem<any> = ({ item }) => {
  return <ActionCard item={item} />;
};

const AllActionCards = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={2}
      columnWrapperStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 7,
      }}
    />
  );
};

export default AllActionCards;
