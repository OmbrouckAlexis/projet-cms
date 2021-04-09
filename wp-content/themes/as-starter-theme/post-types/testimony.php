<?php

/**
 * Registers the `testimony` post type.
 */
function testimony_init() {
	register_post_type( 'testimony', array(
		'labels'                => array(
			'name'                  => __( 'Temoignages', 'skin' ),
			'singular_name'         => __( 'Temoignage', 'skin' ),
			'all_items'             => __( 'All Temoignages', 'skin' ),
			'archives'              => __( 'Temoignage Archives', 'skin' ),
			'attributes'            => __( 'Temoignage Attributes', 'skin' ),
			'insert_into_item'      => __( 'Insert into temoignage', 'skin' ),
			'uploaded_to_this_item' => __( 'Uploaded to this temoignage', 'skin' ),
			'featured_image'        => _x( 'Featured Image', 'testimony', 'skin' ),
			'set_featured_image'    => _x( 'Set featured image', 'testimony', 'skin' ),
			'remove_featured_image' => _x( 'Remove featured image', 'testimony', 'skin' ),
			'use_featured_image'    => _x( 'Use as featured image', 'testimony', 'skin' ),
			'filter_items_list'     => __( 'Filter temoignages list', 'skin' ),
			'items_list_navigation' => __( 'Temoignages list navigation', 'skin' ),
			'items_list'            => __( 'Temoignages list', 'skin' ),
			'new_item'              => __( 'New Temoignage', 'skin' ),
			'add_new'               => __( 'Add New', 'skin' ),
			'add_new_item'          => __( 'Add New Temoignage', 'skin' ),
			'edit_item'             => __( 'Edit Temoignage', 'skin' ),
			'view_item'             => __( 'View Temoignage', 'skin' ),
			'view_items'            => __( 'View Temoignages', 'skin' ),
			'search_items'          => __( 'Search temoignages', 'skin' ),
			'not_found'             => __( 'No temoignages found', 'skin' ),
			'not_found_in_trash'    => __( 'No temoignages found in trash', 'skin' ),
			'parent_item_colon'     => __( 'Parent Temoignage:', 'skin' ),
			'menu_name'             => __( 'Temoignages', 'skin' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_position'         => null,
		'menu_icon'             => 'dashicons-nametag',
		'show_in_rest'          => true,
		'rest_base'             => 'testimony',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	) );

}
add_action( 'init', 'testimony_init' );

/**
 * Sets the post updated messages for the `testimony` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `testimony` post type.
 */
function testimony_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['testimony'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Temoignage updated. <a target="_blank" href="%s">View temoignage</a>', 'skin' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'skin' ),
		3  => __( 'Custom field deleted.', 'skin' ),
		4  => __( 'Temoignage updated.', 'skin' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Temoignage restored to revision from %s', 'skin' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Temoignage published. <a href="%s">View temoignage</a>', 'skin' ), esc_url( $permalink ) ),
		7  => __( 'Temoignage saved.', 'skin' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Temoignage submitted. <a target="_blank" href="%s">Preview temoignage</a>', 'skin' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Temoignage scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview temoignage</a>', 'skin' ),
		date_i18n( __( 'M j, Y @ G:i', 'skin' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Temoignage draft updated. <a target="_blank" href="%s">Preview temoignage</a>', 'skin' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'testimony_updated_messages' );
