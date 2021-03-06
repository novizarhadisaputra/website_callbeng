import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faRedoAlt, faFunnelDollar } from '@fortawesome/free-solid-svg-icons';

export default class DashboardTransactions extends Component {
	render() {
		return (
			<div className="p-8 bg-gray-200 max-w-full max-h-full">
				<div className="flex">
					<span className="text-3xl font-bold">Transactions</span>
				</div>
				<div className="flex justify-between">
					<div className="my-4 w-2/6 bg-green-400 text-gray-200 max-w-sm rounded overflow-hidden shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Total Transactions</div>
							<div className="flex my-3 justify-between">
								<FontAwesomeIcon icon={faShoppingCart} size="3x" />
								<span className=" text-3xl font-bold">4,000,000</span>
							</div>
						</div>
					</div>
					<div className="my-4 mx-8 w-2/6 bg-blue-400 text-gray-200 max-w-sm rounded overflow-hidden shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Total Revenue</div>
							<div className="flex my-3 justify-between">
								<FontAwesomeIcon icon={faFunnelDollar} size="3x" />
								<span className=" text-3xl font-bold">$ 400,000,000</span>
							</div>
						</div>
					</div>
					<div className="my-4 w-2/6 bg-yellow-400 text-gray-200 max-w-sm rounded overflow-hidden shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Total Refund</div>
							<div className="flex items-center my-3 justify-between">
								<FontAwesomeIcon icon={faRedoAlt} size="3x" />
								<div className="flex">
									<span className=" text-3xl font-bold">$ 400,000</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="w-1/2 max-w-3xl my-4 bg-white text-black rounded shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Table Transactions</div>
							<div className="flex my-3 items-center justify-between">
								<span className="text-1xl">From</span>
								<div className="p-2 w-1/2">
									<input
										type="date"
										className="border focus:border-blue-500 outline-none py-2 px-10 rounded-full"
									/>
								</div>
								<span className="text-1xl">To</span>
								<div className="p-2 w-1/2">
									<input
										type="date"
										className="border focus:border-blue-500 outline-none py-2 px-10 rounded-full"
									/>
								</div>
							</div>
							<div className="flex my-3">
								<table className="w-full max-w-full">
									<thead>
										<tr>
											<th className="px-4 py-2">Product</th>
											<th className="px-4 py-2">Technician</th>
											<th className="px-4 py-2">Qty</th>
											<th className="px-4 py-2">Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border px-4 py-2">Low Service</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">150,000</td>
										</tr>
										<tr className="bg-gray-100">
											<td className="border px-4 py-2">Kampas Rem</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">2</td>
											<td className="border px-4 py-2">50,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Ban Dalam</td>
											<td className="border px-4 py-2">Chris</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">70,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Low Service</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">150,000</td>
										</tr>
										<tr className="bg-gray-100">
											<td className="border px-4 py-2">Kampas Rem</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">2</td>
											<td className="border px-4 py-2">50,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Ban Dalam</td>
											<td className="border px-4 py-2">Chris</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">70,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Low Service</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">150,000</td>
										</tr>
										<tr className="bg-gray-100">
											<td className="border px-4 py-2">Kampas Rem</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">2</td>
											<td className="border px-4 py-2">50,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Ban Dalam</td>
											<td className="border px-4 py-2">Chris</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">70,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Low Service</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">150,000</td>
										</tr>
										<tr className="bg-gray-100">
											<td className="border px-4 py-2">Kampas Rem</td>
											<td className="border px-4 py-2">Adam</td>
											<td className="border px-4 py-2">2</td>
											<td className="border px-4 py-2">50,000</td>
										</tr>
										<tr>
											<td className="border px-4 py-2">Ban Dalam</td>
											<td className="border px-4 py-2">Chris</td>
											<td className="border px-4 py-2">1</td>
											<td className="border px-4 py-2">70,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className="w-1/2 ml-4 max-w-3xl my-4 bg-white text-black rounded shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2">Graphic Transactions</div>
							<div className="flex my-3 justify-between" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
