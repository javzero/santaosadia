@extends('layouts.store.main')

@section('content')
    <div class="container padding-bottom-3x mb-2 marg-top-25">
        <div class="row">
            <div class="container padding-bottom-3x mb-1">
                <h1>Pedido N° {{ $cart->id }}</h1>
        <!-- Shopping Cart-->
                <div class="table-responsive shopping-cart">
                    <table class="table">
                        <thead>
                              <tr>
                                <th>Detalle</th>
                                <th class="text-center">P.U.</th>
                                <th class="text-center">Cantidad</th>
                                <th class="text-center">Subtotal</th>
                                <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#">Vaciar Carro</a></th>
                            </tr>
                        </thead>
                        <tbody>
                        {{--  Calc  Order Total Value  --}}
                            @foreach($cart->details as $item)
                            
                            <tr id="Detail{{$item->id}}">
                                <td>
                                    <div class="product-item"><a class="product-thumb" href="{{ url('tienda/articulo/'.$item->article->id) }}">
                                        <img src="{{ asset('webimages/catalogo/'. $item->article->featuredImageName() ) }}" alt="{{ $item->name }}"></a>
                                        <div class="product-info">
                                        <h4 class="product-title"><a href="{{ url('tienda/articulo/'.$item->article->id) }}">{{ $item->article->name }}</a></h4>
                                        <span><em>Código:</em> #{{ $item->article->id }}</span>
                                        <span><em>Categoría:</em> {{ $item->article->category->name}}</span>
                                        <span><em>Tela:</em> {{ $item->article->textile }}</span>
                                        <span><em>Color:</em> {{ $item->article->color }}</span>
                                        <span><em>Talle:</em> 
                                            @foreach($item->article->atribute1 as $size)
                                                {{ $size->name }}
                                            @endforeach
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                </td>
                                 <td class="text-center">
                                    <del class="text-muted text-normal">$ {{ $item->price }}</del>
                                    $ {{ calcValuePercentNeg($item->article->price, $item->discount) }}
                                </td>
                                <td class="text-center">
                                    {{ $item->quantity }}
                                </td>
                                
                                @if($item->article->discount > 0)
                                    <td class="text-center text-lg text-medium">
                                        $ {{ calcValuePercentNeg($item->price, $item->discount) * $item->quantity }}
                                    </td>
                                @else
                                    <td class="text-center text-lg text-medium">$ {{ $item->price * $item->quantity }}</td>
                                @endif
                                
                                <td class="text-center"><a class="RemoveArticleFromCart cursor-pointer" data-detailid="{{ $item->id }}">
                                    <i class="icon-cross"></i></a>
                                </td>
                            </tr>

                            
                            @endforeach
                            <tr>
                                <td></td><td></td>
                                <td>
                                    <b>Método de pago:</b> {{ $cart->payment->name }}
                                    @if($cart->payment->percent != '0.00')
                                    (%{{$cart->payment->percent}})
                                    @endif
                                </td>
                                <td>
                                    $ {{ $paymentCost }}
                                </td>
                            </tr>
                            <tr>
                                <td></td><td></td>
                                <td>
                                    <b>Envío:</b> {{ $cart->shipping->name }}
                                </td>
                                <td>
                                    $ {{ $shippingCost }}
                                </td>
                            </tr>
                            <tr>
                                <td></td><td></td>
                                <td>
                                    <b>TOTAL:</b>
                                </td>
                                <td>
                                    <h3>$ {{ $cartTotal }}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div class="shopping-cart-footer">
                    <div class="column">
                        <a class="btn btn-outline-secondary" href="{{ route('store') }}"><i class="icon-arrow-left"></i>&nbsp;Volver a la tienda</a>
                    </div>
                    <div class="column">
                        <a class="btn btn-outline-primary">Estado : {{ orderStatusTrd($cart->status) }}</a>
                        {{--  <a class="btn btn-primary" href="#">Actualizar Carro</a>
                        <a class="btn btn-success" href="checkout-address.html">Checkout</a>  --}}
                    </div>
                </div>
            </div>
		</div>
		<div id="Error"></div>
    </div>

@endsection

@section('custom_js')
	@include('store.components.bladejs')
@endsection